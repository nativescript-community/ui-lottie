/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/

import { Color, View } from '@nativescript/core/ui/core/view';
import { autoPlayProperty, loopProperty, LottieViewBase, srcProperty } from './nativescript-lottie.common';
import { RESOURCE_PREFIX } from '@nativescript/core/utils/utils';
import { knownFolders, path } from '@nativescript/core/file-system';
import { clamp } from './utils';

export class LottieView extends LottieViewBase {
    // private _contentMode: UIViewContentMode;
    nativeView: CompatibleAnimationView;
    /// LOTAnimationView
    get ios(): any {
        return this.nativeView;
    }

    public createNativeView() {
        const view = CompatibleAnimationView.new();
        view.contentMode = UIViewContentMode.ScaleAspectFit;
        return view;
    }

    public initNativeView(): void {
        super.initNativeView();
        this.nativeView.translatesAutoresizingMaskIntoConstraints = true;
    }

    [srcProperty.setNative](src: string) {
        if (src.startsWith('{')) {
            this.nativeView.compatibleAnimation = CompatibleAnimation.alloc().initWithJson(src);
        } else {
            if (src.indexOf('~/') === 0) {
                let filePath = `${path.join(knownFolders.currentApp().path, src.replace('~/', ''))}`;
                if (!/.(json|zip)$/.test(filePath)) {
                    filePath += '.json';
                }
                this.nativeView.compatibleAnimation = CompatibleAnimation.alloc().initWithFilepath(filePath);
            } else {
                const resName = src.replace(RESOURCE_PREFIX, '');
                this.nativeView.compatibleAnimation = CompatibleAnimation.alloc().initWithNameBundle(resName.replace('.json', ''), NSBundle.mainBundle);
            }
        }
    }

    [loopProperty.setNative](loop: boolean) {
        this.setLoopAnimation(loop);
    }

    private setLoopAnimation(loop: boolean): void {
        if (this.nativeView) {
            this.nativeView.loopAnimationCount = loop ? -1 : 0;
        }
    }

    [autoPlayProperty.setNative](autoPlay: boolean) {
        if (autoPlay) {
            this.setLoopAnimation(this.loop);

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
            if (keyPath[keyPath.length - 1].toLowerCase() !== 'color') {
                keyPath.push('Color'); // ios expects the property as the last item in the keyPath
            }

            this.nativeView.setColorValueForKeypath(value.ios, CompatibleAnimationKeypath.alloc().initWithKeypath(keyPath.join('.')));
        }
    }

    public setOpacityValueDelegateForKeyPath(value: number, keyPath: string[]): void {
        if (this.nativeView && value && keyPath && keyPath.length) {
            if (keyPath[keyPath.length - 1].toLowerCase() !== 'opacity') {
                keyPath.push('Opacity'); // ios expects the property as the last item in the keyPath
            }

            this.nativeView.setFloatValueForKeypath(value, CompatibleAnimationKeypath.alloc().initWithKeypath(keyPath.join('.')));
        }
        // TODO: not working
        // if (this.nativeView && value && keyPath && keyPath.length) {
        //   if (keyPath[keyPath.length - 1].toLowerCase() !== 'opacity') {
        //     keyPath.push('Opacity'); // ios expects the property as the last item in the keyPath
        //   }
        //   value = clamp(value);
        //   this.nativeView.getValue(
        //     LOTNumberValueCallback.withFloatValue(value),
        //     AnimationKeypath.keypathWithString(keyPath.join('.'))
        //   );
        // }
    }

    public playAnimation(): void {
        if (this.nativeView) {
            if (this.completionBlock) {
                this.nativeView.playWithCompletion((animationFinished: boolean) => {
                    if (this.completionBlock) {
                        this.completionBlock(animationFinished);
                    }
                });
            } else {
                this.nativeView.play();
            }
        }
    }

    public playAnimationFromProgressToProgress(startProgress: number, endProgress: number): void {
        if (this.nativeView) {
            startProgress = startProgress ? clamp(startProgress) : 0;
            endProgress = endProgress ? clamp(endProgress) : 1;
            if (this.completionBlock) {
                this.nativeView.playFromProgressToProgressCompletion(startProgress, endProgress, this.completionBlock);
            } else {
                this.nativeView.playFromProgressToProgressCompletion(startProgress, endProgress, null);
            }
        }
    }

    public cancelAnimation(): void {
        if (this.nativeView) {
            this.nativeView.pause();
        }
    }

    public isAnimating(): boolean {
        return this.nativeView ? this.nativeView.isAnimationPlaying : false;
    }

    public set progress(value: number) {
        if (this.nativeView && value) {
            this.nativeView.currentProgress = value;
        }
    }

    public get progress(): number | undefined {
        return this.nativeView ? this.nativeView.currentProgress : undefined;
    }

    public set speed(value: number) {
        if (this.nativeView && value) {
            this.nativeView.animationSpeed = value;
        }
    }

    public get speed(): number | undefined {
        return this.nativeView ? this.nativeView.animationSpeed : undefined;
    }

    public get duration(): number | undefined {
        return this.nativeView && this.nativeView.animationDuration;
    }

    public set contentMode(mode: any) {
        // this._contentMode = mode;
        if (this.nativeView) {
            this.nativeView.contentMode = mode;
        }
    }

    // ensures a reasonable default contentMode is set
    // https://github.com/airbnb/lottie-ios#using-lottie
    // private contentModeDefault(): void {
    //     if (this.nativeView) {
    //         if (this._contentMode) {
    //             this.nativeView.contentMode = this._contentMode;
    //         } else {
    //             // default
    //             this.nativeView.contentMode = UIViewContentMode.ScaleAspectFit;
    //         }
    //     }
    // }
}
