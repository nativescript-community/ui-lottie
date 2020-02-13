/**********************************************************************************
 * (c) 2017, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/

import { Color, View } from '@nativescript/core/ui/core/view';
import { autoPlayProperty, loopProperty, LottieViewBase, srcProperty, renderModeProperty } from './nativescript-lottie.common';
import { RESOURCE_PREFIX } from '@nativescript/core/utils/utils';
import { knownFolders, path } from '@nativescript/core/file-system';
import { clamp } from './utils';
import { File } from '@nativescript/core/file-system';

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

function initProps() {
    if (!LottieProperty) {
        LottieProperty = com.airbnb.lottie.LottieProperty;
    }

    if (!LottieKeyPath) {
        LottieKeyPath = com.airbnb.lottie.model.KeyPath;
    }

    if (!LottieValueCallback) {
        LottieValueCallback = com.airbnb.lottie.value.LottieValueCallback;
    }
    if (!LottieAnimationView) {
        LottieAnimationView = com.airbnb.lottie.LottieAnimationView;
    }
}

export class LottieView extends LottieViewBase {
    nativeView: com.airbnb.lottie.LottieAnimationView;
    get android(): any {
        return this.nativeView;
    }

    public createNativeView(): View {
        initProps();
        return new LottieAnimationView(this._context);
    }
    animatorListener;
    public initNativeView(): void {
        this.nativeView.addAnimatorListener(
            new android.animation.Animator.AnimatorListener({
                onAnimationCancel: _animator => {
                    if (this.completionBlock) {
                        this.completionBlock(false);
                    }
                },
                onAnimationEnd: _animator => {
                    if (this.completionBlock) {
                        this.completionBlock(true);
                    }
                },
                onAnimationRepeat: _animator => {
                    // noop
                },
                onAnimationStart: _animator => {
                    // noop
                }
            })
        );

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
        this.nativeView.removeAllAnimatorListeners();

        super.disposeNativeView();
    }

    [srcProperty.setNative](src: string) {
        console.log('srcProperty', src, this.loop, this.autoPlay);

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

        // if (this.loop) {
        //   this.setLoopAnimation(this.loop);
        // }

        if (this.autoPlay) {
            this.playAnimation();
        }
    }

    // private setSrc(src: string) {
    //   if (this.nativeView) {

    //   }
    // }

    [loopProperty.setNative](loop: boolean) {
        this.setLoopAnimation(loop);
    }
    [renderModeProperty.setNative](renderMode) {
        this.nativeView.setRenderMode(renderMode);
    }

    private setLoopAnimation(loop: boolean): void {
        console.log('setLoopAnimation', loop);
        if (this.nativeView) {
            this.nativeView.loop(loop);
        }
    }

    [autoPlayProperty.setNative](autoPlay: boolean) {
        if (autoPlay) {
            if (!this.isAnimating()) {
                this.playAnimation();
            }
        } else {
            if (this.isAnimating()) {
                this.cancelAnimation();
            }
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
            this.nativeView.addValueCallback(new LottieKeyPath(nativeKeyPath), LottieProperty.OPACITY, new LottieValueCallback(new java.lang.Integer(value * 100)));
        }
    }

    public playAnimation(): void {
        console.log('playAnimation');
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

    public set progress(value: number) {
        if (this.nativeView && value) {
            this.nativeView.setProgress(value);
        }
    }

    public get progress(): number | undefined {
        return this.nativeView ? this.nativeView.getProgress() : undefined;
    }

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
