/**********************************************************************************
 * (c) 2017, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/

import { Color, File, Utils } from '@nativescript/core';
import {
    LottieViewBase,
    autoPlayProperty,
    loopProperty,
    progressProperty,
    renderModeProperty,
    srcProperty,
    stretchProperty
} from './lottie.common';
import { clamp } from './utils';

let LottieProperty;
let LottieKeyPath;
let LottieValueCallback;

const cache = new Map();
function loadLottieJSON(iconSrc) {
    if (!cache.has(iconSrc)) {
        const file = File.fromPath(iconSrc);
        return file.readText().then((r) => {
            cache.set(iconSrc, r);
            return r;
        });
    }
    return Promise.resolve(cache.get(iconSrc));
}

export const RenderMode = {
    get AUTOMATIC() {
        return com.airbnb.lottie.RenderMode.AUTOMATIC;
    },
    get HARDWARE() {
        return com.airbnb.lottie.RenderMode.HARDWARE;
    },
    get SOFTWARE() {
        return com.airbnb.lottie.RenderMode.SOFTWARE;
    }
};

export class LottieView extends LottieViewBase {
    nativeViewProtected: com.airbnb.lottie.LottieAnimationView;

    public createNativeView() {
        return new com.nativescript.lottie.LottieAnimationView(this._context);
    }

    animatorListener;
    _completionBlock;
    //@ts-ignore
    get completionBlock() {
        return this._completionBlock;
    }
    set completionBlock(block) {
        this._completionBlock = block;
        if (block) {
            if (!this.animatorListener) {
                this.animatorListener = new android.animation.Animator.AnimatorListener({
                    onAnimationCancel: (_animator) => {
                        if (this._completionBlock) {
                            this._completionBlock(false);
                        }
                    },
                    onAnimationEnd: (_animator) => {
                        if (this._completionBlock) {
                            this._completionBlock(true);
                        }
                    },
                    onAnimationRepeat: (_animator) => {
                        // noop
                    },
                    onAnimationStart: (_animator) => {
                        // noop
                    }
                });
                if (this.nativeViewProtected) {
                    this.nativeViewProtected.addAnimatorListener(this.animatorListener);
                }
            }
        } else if (this.animatorListener) {
            if (this.nativeViewProtected) {
                this.nativeViewProtected.removeAnimatorListener(this.animatorListener);
            }
            this.animatorListener = null;
        }
    }
    public initNativeView(): void {
        if (this.animatorListener) {
            this.nativeViewProtected.addAnimatorListener(this.animatorListener);
        }
        // if (this.src) {
        //   this[srcProperty.setNative](this.src);
        // }

        // if (this.loop) {
        //   this.nativeView.loop(this.loop);
        // }

        // if (this.autoPlay) {
        //   this.playAnimation();
        // }
    }

    public disposeNativeView(): void {
        if (this.animatorListener) {
            this.nativeViewProtected.removeAnimatorListener(this.animatorListener);
        }
        super.disposeNativeView();
    }

    [srcProperty.setNative](src: string) {
        const view = this.nativeViewProtected;
        if (!src) {
            view.setAnimation(null);
        } else if (src[0] === '{') {
            view.setAnimationFromJson(src, null);
        } else if (src.startsWith(Utils.RESOURCE_PREFIX)) {
            const resName = src.replace(Utils.RESOURCE_PREFIX, '');
            view.setAnimation(resName);
        } else {
            if (!/.(json|zip|lottie)$/.test(src)) {
                src += '.json';
            }
            if (src[0] === '~') {
                this.nativeView.setAnimation('app/' + src.substring(2));
            } else if (!src.startsWith('file:/') && src[0] !== '/') {
                this.nativeView.setAnimation(src);
            } else {
                loadLottieJSON(src).then((r) => {
                    this.nativeView.setAnimationFromJson(r, null);
                });
            }
        }

        if (this.autoPlay) {
            this.playAnimation();
        }
    }

    [loopProperty.setNative](loop: boolean) {
        this.nativeViewProtected.loop(loop);
    }
    [renderModeProperty.setNative](renderMode) {
        this.nativeViewProtected.setRenderMode(renderMode);
    }

    [autoPlayProperty.setNative](autoPlay: boolean) {
        if (autoPlay) {
            if (!this.isAnimating()) {
                this.playAnimation();
            }
        } else {
            // disable check for now as isAnimating always returns false
            // if (this.isAnimating()) {
            this.cancelAnimation();
            if (this.progress) {
                this.nativeViewProtected.setProgress(this.progress);
            }
            // }
        }
    }

    public setColorValueDelegateForKeyPath(value: Color, keyPath: string[]): void {
        if (this.nativeViewProtected && value && keyPath && keyPath.length) {
            if (keyPath[keyPath.length - 1].toLowerCase() === 'color') {
                keyPath.pop(); // android specifies the property as an enum parameter.
                if (keyPath.length === 0) {
                    return;
                }
            }
            const nativeKeyPath: java.lang.String[] = Array.create(java.lang.String, keyPath.length);
            keyPath.forEach((key, index) => {
                nativeKeyPath[index] = new java.lang.String(key);
            });
            if (!LottieProperty) {
                LottieProperty = com.airbnb.lottie.LottieProperty;
            }
            if (!LottieValueCallback) {
                LottieValueCallback = com.airbnb.lottie.value.LottieValueCallback;
            }

            if (!LottieKeyPath) {
                LottieKeyPath = com.airbnb.lottie.model.KeyPath;
            }
            this.nativeViewProtected.addValueCallback(
                new LottieKeyPath(nativeKeyPath),
                LottieProperty.COLOR,
                new LottieValueCallback(new java.lang.Integer(value.android))
            );
        }
    }

    public setOpacityValueDelegateForKeyPath(value: number, keyPath: string[]): void {
        if (this.nativeViewProtected && value && keyPath && keyPath.length) {
            if (keyPath[keyPath.length - 1].toLowerCase() === 'opacity') {
                keyPath.pop();
                if (keyPath.length === 0) {
                    return;
                }
            }
            const nativeKeyPath: java.lang.String[] = Array.create(java.lang.String, keyPath.length);
            keyPath.forEach((key, index) => {
                nativeKeyPath[index] = new java.lang.String(key);
            });
            value = clamp(value);
            if (!LottieProperty) {
                LottieProperty = com.airbnb.lottie.LottieProperty;
            }
            if (!LottieValueCallback) {
                LottieValueCallback = com.airbnb.lottie.value.LottieValueCallback;
            }

            if (!LottieKeyPath) {
                LottieKeyPath = com.airbnb.lottie.model.KeyPath;
            }
            this.nativeViewProtected.addValueCallback(
                new LottieKeyPath(nativeKeyPath),
                LottieProperty.OPACITY,
                new LottieValueCallback(new java.lang.Integer(value * 100))
            );
        }
    }

    public playAnimation(): void {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setMinAndMaxProgress(0, 1);
            this.nativeViewProtected.playAnimation();
        }
    }

    public playAnimationFromProgressToProgress(startProgress: number, endProgress: number): void {
        if (this.nativeViewProtected) {
            startProgress = startProgress ? clamp(startProgress) : 0;
            endProgress = endProgress ? clamp(endProgress) : 1;
            this.nativeViewProtected.setMinAndMaxProgress(startProgress, endProgress);
            this.nativeViewProtected.playAnimation();
        }
    }

    public isAnimating(): boolean {
        return this.nativeViewProtected ? this.nativeViewProtected.isAnimating() : false;
    }

    [progressProperty.setNative](value: number) {
        this.nativeViewProtected.setProgress(value);
    }
    // public set progress(value: number) {
    //     if (this.nativeView && value) {
    //         this.nativeView.setProgress(value);
    //     }
    // }

    // public get progress(): number | undefined {
    //     return this.nativeView ? this.nativeView.getProgress() : undefined;
    // }

    public get speed(): number | undefined {
        return this.nativeViewProtected ? this.nativeViewProtected.getSpeed() : undefined;
    }

    public set speed(value: number) {
        if (this.nativeViewProtected && value) {
            this.nativeViewProtected.setSpeed(value);
        }
    }

    public get duration(): number | undefined {
        return this.nativeViewProtected ? this.nativeViewProtected.getDuration() : undefined;
    }

    public cancelAnimation(): void {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.cancelAnimation();
        }
    }

    [stretchProperty.getDefault](): 'aspectFit' {
        return 'aspectFit';
    }
    [stretchProperty.setNative](value: 'none' | 'aspectFill' | 'aspectFit' | 'fill') {
        switch (value) {
            case 'aspectFit':
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
                break;
            case 'aspectFill':
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
                break;
            case 'fill':
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
                break;
            case 'none':
            default:
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.MATRIX);
                break;
        }
    }
}
