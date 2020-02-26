/**********************************************************************************
 * (c) 2017, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/

import { Color, View } from '@nativescript/core/ui/core/view';
import { autoPlayProperty, loopProperty, LottieViewBase, srcProperty, renderModeProperty, progressProperty } from './nativescript-lottie.common';
import { RESOURCE_PREFIX } from '@nativescript/core/utils/utils';
import { knownFolders, path } from '@nativescript/core/file-system';
import { clamp } from './utils';
import { File } from '@nativescript/core/file-system';
import { profile } from '@nativescript/core/profiling';

let LottieProperty;
let LottieKeyPath;
let LottieValueCallback;
let LottieAnimationView;

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
    nativeView: com.airbnb.lottie.LottieAnimationView;
    get android(): any {
        return this.nativeView;
    }

    public createNativeView(): View {
        if (!LottieAnimationView) {
            LottieAnimationView = com.airbnb.lottie.LottieAnimationView;
        }
        return new LottieAnimationView(this._context);
    }

    animatorListener;
    _completionBlock;
    get completionBlock() {
        return this._completionBlock;
    }
    set completionBlock(block) {
        this._completionBlock = block;
        if (block) {
            if (!this.animatorListener) {
                this.animatorListener = new android.animation.Animator.AnimatorListener({
                    onAnimationCancel: _animator => {
                        if (this._completionBlock) {
                            this._completionBlock(false);
                        }
                    },
                    onAnimationEnd: _animator => {
                        if (this._completionBlock) {
                            this._completionBlock(true);
                        }
                    },
                    onAnimationRepeat: _animator => {
                        // noop
                    },
                    onAnimationStart: _animator => {
                        // noop
                    }
                });
                if (this.nativeView) {
                    this.nativeView.addAnimatorListener(this.animatorListener);
                }
            }
        } else if (this.animatorListener) {
            if (this.nativeView) {
                this.nativeView.removeAnimatorListener(this.animatorListener);
            }
            this.animatorListener = null;
        }
    }
    public initNativeView(): void {
        if (this.animatorListener) {
            this.nativeView.addAnimatorListener(this.animatorListener);
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
            this.nativeView.removeAnimatorListener(this.animatorListener);
        }
        super.disposeNativeView();
    }

    @profile
    setSrc(src: string) {
        if (src.startsWith('{')) {
            this.nativeView.setAnimationFromJson(src);
        } else {
            // allows passing the lottie json asset without the file extension
            // github issue: https://github.com/bradmartin/nativescript-lottie/issues/37
            src = /.(json|zip)$/.test(src) ? src : `${src}.json`;

            if (src.indexOf('~/') === 0) {
                const file = File.fromPath(`${path.join(knownFolders.currentApp().path, src.replace('~/', ''))}`);
                this.nativeView.setAnimationFromJson(file.readTextSync());
            } else {
                const resName = src.replace(RESOURCE_PREFIX, '');
                this.nativeView.setAnimation(resName);
            }
        }

        if (this.autoPlay) {
            this.playAnimation();
        }
    }

    [srcProperty.setNative](src: string) {
        this.setSrc(src);
    }

    [loopProperty.setNative](loop: boolean) {
        this.nativeView.loop(loop);
    }
    [renderModeProperty.setNative](renderMode) {
        this.nativeView.setRenderMode(renderMode);
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
                this.nativeView.setProgress(this.progress);
            }
            // }
        }
    }

    public setColorValueDelegateForKeyPath(value: Color, keyPath: string[]): void {
        if (this.nativeView && value && keyPath && keyPath.length) {
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
            this.nativeView.addValueCallback(new LottieKeyPath(nativeKeyPath), LottieProperty.COLOR, new LottieValueCallback(new java.lang.Integer(value.android)));
        }
    }

    public setOpacityValueDelegateForKeyPath(value: number, keyPath: string[]): void {
        if (this.nativeView && value && keyPath && keyPath.length) {
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
            this.nativeView.addValueCallback(new LottieKeyPath(nativeKeyPath), LottieProperty.OPACITY, new LottieValueCallback(new java.lang.Integer(value * 100)));
        }
    }

    public playAnimation(): void {
        if (this.nativeView) {
            this.nativeView.setMinAndMaxProgress(0, 1);
            this.nativeView.playAnimation();
        }
    }

    public playAnimationFromProgressToProgress(startProgress: number, endProgress: number): void {
        if (this.nativeView) {
            startProgress = startProgress ? clamp(startProgress) : 0;
            endProgress = endProgress ? clamp(endProgress) : 1;
            this.nativeView.setMinAndMaxProgress(startProgress, endProgress);
            this.nativeView.playAnimation();
        }
    }

    public isAnimating(): boolean {
        return this.nativeView ? this.nativeView.isAnimating() : false;
    }

    [progressProperty.setNative](value: number) {
        this.nativeView.setProgress(value);
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
        return this.nativeView ? this.nativeView.getSpeed() : undefined;
    }

    public set speed(value: number) {
        if (this.nativeView && value) {
            this.nativeView.setSpeed(value);
        }
    }

    public get duration(): number | undefined {
        return this.nativeView ? this.nativeView.getDuration() : undefined;
    }

    public cancelAnimation(): void {
        if (this.nativeView) {
            this.nativeView.cancelAnimation();
        }
    }
}
