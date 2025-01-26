/**********************************************************************************
 * (c) 2017, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/

import { Color, File, Utils } from '@nativescript/core';
import { LottieViewBase, autoPlayProperty, keyPathColorsProperty, loopProperty, progressProperty, renderModeProperty, srcProperty, stretchProperty } from './index.common';
import { clamp } from './utils';

let LottieProperty: typeof com.airbnb.lottie.LottieProperty;
let LottieKeyPath: typeof com.airbnb.lottie.model.KeyPath;
let LottieValueCallback: typeof com.airbnb.lottie.value.LottieValueCallback;
let LottieCompositionFactory: typeof com.airbnb.lottie.LottieCompositionFactory;

const cache = new Map();
async function loadLottieJSON(iconSrc) {
    if (!cache.has(iconSrc)) {
        const file = File.fromPath(iconSrc);
        const r = await file.readText();
        cache.set(iconSrc, r);
        return r;
    }
    return cache.get(iconSrc);
}
function loadLottieJSONSync(iconSrc) {
    if (!cache.has(iconSrc)) {
        const file = File.fromPath(iconSrc);
        const r = file.readTextSync();
        cache.set(iconSrc, r);
        return r;
    }
    return cache.get(iconSrc);
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

    animatorListener: android.animation.Animator.AnimatorListener;
    loadedListener: com.airbnb.lottie.LottieOnCompositionLoadedListener;
    _completionBlock;
    //@ts-ignore
    get completionBlock() {
        return this._completionBlock;
    }
    set completionBlock(block) {
        this._completionBlock = block;
        if (block) {
            if (!this.animatorListener) {
                const that = new WeakRef(this);
                this.animatorListener = new android.animation.Animator.AnimatorListener({
                    onAnimationCancel: (_animator) => {
                        const owner = that?.get();
                        if (owner?._completionBlock) {
                            owner._completionBlock(false);
                        }
                    },
                    onAnimationEnd: (_animator) => {
                        const owner = that?.get();
                        if (owner?._completionBlock) {
                            owner._completionBlock(true);
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
        if (!this.loadedListener) {
            const that = new WeakRef(this);
            this.loadedListener = new com.airbnb.lottie.LottieOnCompositionLoadedListener({
                onCompositionLoaded: (composition) => {
                    const owner = that?.get();
                    if (owner) {
                        // delay just a bit so that it get received in sync load
                        setTimeout(() => {
                            this.notify({ eventName: 'compositionLoaded', composition });
                        }, 0);
                    }
                }
            });
        }
        this.nativeViewProtected.addLottieOnCompositionLoadedListener(this.loadedListener);
    }

    public disposeNativeView(): void {
        if (this.animatorListener) {
            this.nativeViewProtected.removeAnimatorListener(this.animatorListener);
        }
        if (this.loadedListener) {
            this.nativeViewProtected.removeLottieOnCompositionLoadedListener(this.loadedListener);
        }
        super.disposeNativeView();
    }

    public setColor(value: Color | string, keyPath: string[]): void {
        const nativeView = this.nativeViewProtected;
        if (nativeView && value && keyPath && keyPath.length) {
            if (keyPath[keyPath.length - 1].toLowerCase() === 'color') {
                keyPath = [...keyPath];
                keyPath.pop(); // android specifies the property as an enum parameter.
                if (keyPath.length === 0) {
                    return;
                }
            }
            const nativeKeyPath: any[] = Array.create(java.lang.String, keyPath.length);
            for (let index = 0; index < keyPath.length; index++) {
                nativeKeyPath[index] = keyPath[index];
            }
            if (!LottieProperty) {
                LottieProperty = com.airbnb.lottie.LottieProperty;
            }
            if (!LottieValueCallback) {
                LottieValueCallback = com.airbnb.lottie.value.LottieValueCallback;
            }

            if (!LottieKeyPath) {
                LottieKeyPath = com.airbnb.lottie.model.KeyPath;
            }
            // by using color filter we change all colors (STROKE_COLOR and COLOR)
            const color = value instanceof Color ? value : new Color(value);
            // const colorFilter = new android.graphics.PorterDuffColorFilter(value.android, 	android.graphics.PorterDuff.Mode.SRC_ATOP) ;
            const colorFilter = new com.airbnb.lottie.SimpleColorFilter(color.android);
            nativeView.addValueCallback(new LottieKeyPath(nativeKeyPath as any), LottieProperty.COLOR_FILTER, new LottieValueCallback(colorFilter));
            // nativeView.addValueCallback(
            //     new LottieKeyPath(nativeKeyPath as any),
            //     LottieProperty.COLOR,
            //     new LottieValueCallback(java.lang.Integer.valueOf(value.android))
            // );
        }
    }

    public setOpacity(value: number, keyPath: string[]): void {
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
            this.nativeViewProtected.addValueCallback(new LottieKeyPath(nativeKeyPath as any), LottieProperty.OPACITY, new LottieValueCallback(new java.lang.Integer(value * 100)));
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

    [srcProperty.setNative](src: string) {
        try {
            if (LottieCompositionFactory) {
                LottieCompositionFactory = com.airbnb.lottie.LottieCompositionFactory;
            }
            const view = this.nativeViewProtected;
            let result: com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
            if (!src) {
                // lottie does not support "clearing the animation"
                // view.setAnimation(null);
            } else if (src[0] === '{') {
                if (this.async) {
                    view.setAnimationFromJson(src, null);
                } else {
                    result = LottieCompositionFactory.fromJsonStringSync(this._context, src);
                }
            } else if (src.startsWith(Utils.RESOURCE_PREFIX)) {
                const resName = src.replace(Utils.RESOURCE_PREFIX, '');
                if (this.async) {
                    view.setAnimation(resName);
                } else {
                    result = com.airbnb.lottie.LottieCompositionFactory.fromAssetSync(this._context, resName);
                }
            } else {
                if (!/.(json|zip|lottie)$/.test(src)) {
                    src += '.json';
                }
                if (src[0] === '~') {
                    if (this.async) {
                        view.setAnimation('app/' + src.substring(2));
                    } else {
                        result = com.airbnb.lottie.LottieCompositionFactory.fromAssetSync(this._context, 'app/' + src.substring(2));
                    }
                } else if (!src.startsWith('file:/') && src[0] !== '/') {
                    if (this.async) {
                        view.setAnimation('app/' + src);
                    } else {
                        result = com.airbnb.lottie.LottieCompositionFactory.fromAssetSync(this._context, src);
                    }
                } else {
                    if (this.async) {
                        loadLottieJSON(src).then((result) => {
                            if (this.nativeViewProtected) {
                                this.nativeViewProtected.setAnimationFromJson(result, null);
                            }
                        });
                    } else {
                        result = LottieCompositionFactory.fromJsonStringSync(this._context, loadLottieJSONSync(src));
                    }
                }
            }
            if (result) {
                if (result.getException()) {
                    console.error(result.getException());
                    // view.setComposition(null);
                } else {
                    view.setComposition(result.getValue());

                    //in sync loading we need to fire it ourselves
                    // if we dont differ it from now it wont be received
                    // setTimeout(() => {
                    //     this.notify({ eventName: 'compositionLoaded', composition: result.getValue() });
                    // }, 0);
                }
            }
            if (this.autoPlay) {
                this.playAnimation();
            }
        } catch (error) {
            console.error(error);
        }
    }

    [loopProperty.setNative](loop: boolean) {
        this.nativeViewProtected.setRepeatCount(loop ? -1 /* android.animation.ValueAnimator.INFINITE */ : 0);
    }

    [progressProperty.setNative](value: number) {
        this.nativeViewProtected.setProgress(value);
    }
    [renderModeProperty.setNative](renderMode) {
        this.nativeViewProtected.setRenderMode(renderMode);
    }
    [keyPathColorsProperty.setNative](value) {
        Object.keys(value).forEach((k) => this.setColor(value[k], k.split('|')));
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
