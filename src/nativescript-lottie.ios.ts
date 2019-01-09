/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/
/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />

import { Color, View } from 'tns-core-modules/ui/core/view';
import {
  LottieViewBase,
  srcProperty,
  loopProperty,
  autoPlayProperty
} from './nativescript-lottie.common';

declare var LOTAnimationView: any;
declare var LOTKeypath: any;
declare var LOTColorValueCallback: any;
declare var LOTNumberValueCallback: any;

export class LottieView extends LottieViewBase {
  private _contentMode: any;

  /// LOTAnimationView
  get ios(): any {
    return this.nativeView;
  }

  public createNativeView(): View {
    return LOTAnimationView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
  }

  public initNativeView(): void {
    this.contentModeDefault();

    if (this.src) {
      this.setSrc(this.src);
    }

    if (this.loop) {
      this.setLoopAnimation(this.loop);
    }

    if (this.autoPlay) {
      this.playAnimation();
    }
  }

  public onLoaded(): void {
    super.onLoaded();

    if (this.loadedBlock) {
      this.loadedBlock();
    }
  }

  public [srcProperty.setNative](src: string) {
    this.setSrc(src);
  }

  private setSrc(src: string): void {
    if (this.nativeView) {
      this.nativeView.setAnimationNamed(src);

      if (this.loop) {
        this.setLoopAnimation(this.loop);
      }

      if (this.autoPlay) {
        this.playAnimation();
      }
    }
  }

  public [loopProperty.setNative](loop: boolean) {
    this.setLoopAnimation(loop);
  }

  private setLoopAnimation(loop: boolean): void {
    if (this.nativeView) {
      this.nativeView.loopAnimation = loop;
    }
  }

  public [autoPlayProperty.setNative](autoPlay: boolean) {
    if (autoPlay) {
      this.setLoopAnimation(this.loop);
      this.contentModeDefault();

      if (!this.isAnimating()) {
        this.playAnimation();
      }
    } else {
      if (this.isAnimating()) {
        this.cancelAnimation();
      }
    }
  }

  public setColorValueDelegateForKeyPath(
    value: Color,
    keyPath: string[]
  ): void {
    if (this.nativeView && value && keyPath && keyPath.length) {
      if (keyPath[keyPath.length - 1].toLowerCase() !== 'color') {
        keyPath.push('Color'); // ios expects the property as the last item in the keyPath
      }
      this.nativeView.setValueDelegateForKeypath(
        LOTColorValueCallback.withCGColor(value.ios.CGColor),
        LOTKeypath.keypathWithString(keyPath.join('.'))
      );
    }
  }

  public setOpacityValueDelegateForKeyPath(
    value: number,
    keyPath: string[]
  ): void {
    if (this.nativeView && value && keyPath && keyPath.length) {
      if (keyPath[keyPath.length - 1].toLowerCase() !== 'opacity') {
        keyPath.push('Opacity'); // ios expects the property as the last item in the keyPath
      }
      value = clamp(value);
      this.nativeView.setValueDelegateForKeypath(
        LOTNumberValueCallback.withFloatValue(value),
        LOTKeypath.keypathWithString(keyPath.join('.'))
      );
    }
  }

  public playAnimation(): void {
    if (this.nativeView) {
      this.nativeView.playWithCompletion((animationFinished: boolean) => {
        if (this.completionBlock) {
          this.completionBlock(animationFinished);
        }
      });
    }
  }

  public playAnimationFromProgressToProgress(
    startProgress: number,
    endProgress: number
  ): void {
    if (this.nativeView) {
      startProgress = startProgress ? clamp(startProgress) : 0;
      endProgress = endProgress ? clamp(endProgress) : 1;
      this.nativeView.playFromProgressToProgressWithCompletion(
        startProgress,
        endProgress,
        (animationFinished: boolean) => {
          if (this.completionBlock) {
            this.completionBlock(animationFinished);
          }
        }
      );
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
      this.nativeView.animationProgress = value;
    }
  }

  public get progress(): number | undefined {
    return this.nativeView ? this.nativeView.animationProgress : undefined;
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
    return this.nativeView ? this.nativeView.animationDuration : undefined;
  }

  public set contentMode(mode: any) {
    this._contentMode = mode;
    if (this.nativeView) {
      this.nativeView.contentMode = mode;
    }
  }

  // ensures a reasonable default contentMode is set
  // https://github.com/airbnb/lottie-ios#using-lottie
  private contentModeDefault(): void {
    if (this.nativeView) {
      if (this._contentMode) {
        this.nativeView.contentMode = this._contentMode;
      } else {
        // default
        this.nativeView.contentMode = UIViewContentMode.ScaleAspectFit;
      }
    }
  }
}

function clamp(val: number, min: number = 0, max: number = 1) {
  return val > max ? max : val < min ? min : val;
}
