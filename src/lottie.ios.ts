/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/

import { Color, Utils, View, knownFolders, path } from '@nativescript/core';
import {
    LottieViewBase,
    autoPlayProperty,
    keyPathColorsProperty,
    loopProperty,
    progressProperty,
    srcProperty,
    stretchProperty
} from './lottie.common';
import { clamp } from './utils';

const appPath = knownFolders.currentApp().path;

export class LottieView extends LottieViewBase {
    nativeViewProtected: CompatibleAnimationView;
    private _imageSourceAffectsLayout = true;

    public createNativeView() {
        return CompatibleAnimationView.new();
    }

    public initNativeView(): void {
        super.initNativeView();
        this.nativeViewProtected.translatesAutoresizingMaskIntoConstraints = true;
    }

    public onLoaded() {
        super.onLoaded();
        if (this.autoPlay && !this.isAnimating()) {
            this.playAnimation();
        }
    }

    [srcProperty.setNative](src: string) {
        if (!src) {
            this.nativeViewProtected.compatibleAnimation = null;
        } else if (src[0] === '{') {
            this.nativeViewProtected.compatibleAnimation = CompatibleAnimation.alloc().initWithJson(src);
        } else if (src.startsWith(Utils.RESOURCE_PREFIX)) {
            const resName = src.replace(Utils.RESOURCE_PREFIX, '');

            this.nativeViewProtected.compatibleAnimation = CompatibleAnimation.alloc().initWithNameBundle(
                resName.replace('.json', '').replace('.lottie', ''),
                NSBundle.mainBundle
            );
        } else {
            if (src[0] === '~') {
                src = `${path.join(appPath, src.substring(2))}`;
            }
            if (!/.(json|zip|lottie)$/.test(src)) {
                src += '.json';
            }
            if (!src.startsWith('file:/') && src[0] !== '/') {
                // seen as res
                this.nativeViewProtected.compatibleAnimation = CompatibleAnimation.alloc().initWithNameSubdirectoryBundle(
                    src.replace('.json', '').replace('.lottie', ''),
                    null,
                    NSBundle.mainBundle
                );
            } else {
                this.nativeViewProtected.compatibleAnimation = CompatibleAnimation.alloc().initWithFilepath(src);
            }
        }

        if (this._imageSourceAffectsLayout) {
            this.requestLayout();
        }
    }

    [loopProperty.setNative](loop: boolean) {
        this.nativeViewProtected.loopAnimationCount = loop ? -1 : 0;
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

    public setColor(value: Color, keyPath: string[]): void {
        if (this.nativeView && value && keyPath && keyPath.length) {
            if (keyPath[keyPath.length - 1].toLowerCase() !== 'color') {
                keyPath = [...keyPath];
                keyPath.push('Color'); // ios expects the property as the last item in the keyPath
            }

            const color = value instanceof Color ? value : new Color(value);
            this.nativeViewProtected.setColorValueForKeypath(
                color.ios,
                CompatibleAnimationKeypath.alloc().initWithKeypath(keyPath.join('.'))
            );
        }
    }

    public setOpacity(value: number, keyPath: string[]): void {
        if (this.nativeView && value && keyPath && keyPath.length) {
            if (keyPath[keyPath.length - 1].toLowerCase() !== 'opacity') {
                keyPath.push('Opacity'); // ios expects the property as the last item in the keyPath
            }

            this.nativeViewProtected.setFloatValueForKeypath(
                value,
                CompatibleAnimationKeypath.alloc().initWithKeypath(keyPath.join('.'))
            );
        }
        // TODO: not working
        // if (this.nativeView && value && keyPath && keyPath.length) {
        //   if (keyPath[keyPath.length - 1].toLowerCase() !== 'opacity') {
        //     keyPath.push('Opacity'); // ios expects the property as the last item in the keyPath
        //   }
        //   value = clamp(value);
        //   this.nativeViewProtected.getValue(
        //     LOTNumberValueCallback.withFloatValue(value),
        //     AnimationKeypath.keypathWithString(keyPath.join('.'))
        //   );
        // }
    }

    public playAnimation(): void {
        setTimeout(() => {
            if (this.nativeViewProtected) {
                if (this.completionBlock) {
                    this.nativeViewProtected.playWithCompletion((animationFinished: boolean) => {
                        if (this.completionBlock) {
                            this.completionBlock(animationFinished);
                        }
                    });
                } else {
                    this.nativeViewProtected.play();
                }
            }
        }, 0);
    }

    public playAnimationFromProgressToProgress(startProgress: number, endProgress: number): void {
        if (this.nativeViewProtected) {
            startProgress = startProgress ? clamp(startProgress) : 0;
            endProgress = endProgress ? clamp(endProgress) : 1;
            if (this.completionBlock) {
                this.nativeViewProtected.playFromProgressToProgressCompletion(startProgress, endProgress, this.completionBlock);
            } else {
                this.nativeViewProtected.playFromProgressToProgressCompletion(startProgress, endProgress, null);
            }
        }
    }

    public cancelAnimation(): void {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.pause();
        }
    }

    public isAnimating(): boolean {
        return this.nativeView ? this.nativeViewProtected.isAnimationPlaying : false;
    }

    // public get progress(): number | undefined {
    //     return this.nativeView ? this.nativeViewProtected.currentProgress : undefined;
    // }

    [progressProperty.setNative](value: number) {
        this.nativeViewProtected.currentProgress = value;
    }

    // public set progress(value: number) {
    //     if (this.nativeView && value) {
    //         this.nativeViewProtected.currentProgress = value;
    //     }
    // }

    public set speed(value: number) {
        if (this.nativeView && value) {
            this.nativeViewProtected.animationSpeed = value;
        }
    }

    public get speed(): number | undefined {
        return this.nativeView ? this.nativeViewProtected.animationSpeed : undefined;
    }

    public get duration(): number | undefined {
        return this.nativeView && this.nativeViewProtected.animationDuration;
    }

    public set contentMode(mode: any) {
        // this._contentMode = mode;
        if (this.nativeViewProtected) {
            this.nativeViewProtected.contentMode = mode;
        }
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        const intrinsicContentSize = this.nativeViewProtected.intrinsicContentSize;
        // We don't call super because we measure native view with specific size.
        const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
        const widthMode = Utils.layout.getMeasureSpecMode(widthMeasureSpec);

        const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
        const heightMode = Utils.layout.getMeasureSpecMode(heightMeasureSpec);

        const nativeWidth = intrinsicContentSize ? Utils.layout.toDevicePixels(intrinsicContentSize.width) : 0;
        const nativeHeight = intrinsicContentSize ? Utils.layout.toDevicePixels(intrinsicContentSize.height) : 0;

        let measureWidth = Math.max(nativeWidth, this.effectiveMinWidth);
        let measureHeight = Math.max(nativeHeight, this.effectiveMinHeight);

        const finiteWidth: boolean = widthMode !== Utils.layout.UNSPECIFIED;
        const finiteHeight: boolean = heightMode !== Utils.layout.UNSPECIFIED;

        this._imageSourceAffectsLayout = widthMode !== Utils.layout.EXACTLY || heightMode !== Utils.layout.EXACTLY;

        if (nativeWidth !== 0 && nativeHeight !== 0 && (finiteWidth || finiteHeight)) {
            const scale = LottieView.computeScaleFactor(
                width,
                height,
                finiteWidth,
                finiteHeight,
                nativeWidth,
                nativeHeight,
                this.stretch
            );
            const resultW = Math.round(nativeWidth * scale.width);
            const resultH = Math.round(nativeHeight * scale.height);

            measureWidth = finiteWidth ? Math.min(resultW, width) : resultW;
            measureHeight = finiteHeight ? Math.min(resultH, height) : resultH;
        }

        const widthAndState = View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        const heightAndState = View.resolveSizeAndState(measureHeight, height, heightMode, 0);

        this.setMeasuredDimension(widthAndState, heightAndState);
    }

    private static computeScaleFactor(
        measureWidth: number,
        measureHeight: number,
        widthIsFinite: boolean,
        heightIsFinite: boolean,
        nativeWidth: number,
        nativeHeight: number,
        imageStretch: string
    ): { width: number; height: number } {
        let scaleW = 1;
        let scaleH = 1;

        if (
            (imageStretch === 'aspectFill' || imageStretch === 'aspectFit' || imageStretch === 'fill') &&
            (widthIsFinite || heightIsFinite)
        ) {
            scaleW = nativeWidth > 0 ? measureWidth / nativeWidth : 0;
            scaleH = nativeHeight > 0 ? measureHeight / nativeHeight : 0;

            if (!widthIsFinite) {
                scaleW = scaleH;
            } else if (!heightIsFinite) {
                scaleH = scaleW;
            } else {
                // No infinite dimensions.
                switch (imageStretch) {
                    case 'aspectFit':
                        scaleH = scaleW < scaleH ? scaleW : scaleH;
                        scaleW = scaleH;
                        break;
                    case 'aspectFill':
                        scaleH = scaleW > scaleH ? scaleW : scaleH;
                        scaleW = scaleH;
                        break;
                }
            }
        }

        return { width: scaleW, height: scaleH };
    }

    [stretchProperty.setNative](value: 'none' | 'aspectFill' | 'aspectFit' | 'fill') {
        switch (value) {
            case 'aspectFit':
                this.nativeViewProtected.contentMode = UIViewContentMode.ScaleAspectFit;
                break;

            case 'aspectFill':
                this.nativeViewProtected.contentMode = UIViewContentMode.ScaleAspectFill;
                break;

            case 'fill':
                this.nativeViewProtected.contentMode = UIViewContentMode.ScaleToFill;
                break;

            case 'none':
            default:
                this.nativeViewProtected.contentMode = UIViewContentMode.TopLeft;
                break;
        }
    }

    [keyPathColorsProperty.setNative](value) {
        Object.keys(value).forEach((k) => this.setColor(value[k], k.split('|')));
    }
}
