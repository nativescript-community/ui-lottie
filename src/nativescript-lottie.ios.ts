/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/
/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />

import { Color, layout } from 'tns-core-modules/ui/core/view';
import {
  LottieViewBase,
  srcProperty,
  loopProperty,
  autoPlayProperty
} from './nativescript-lottie.common';
import { screen } from 'tns-core-modules/platform';

declare var LOTAnimationView: any;
declare var LOTKeypath: any;
declare var LOTColorValueCallback: any;
declare var LOTNumberInterpolatorCallback: any;

export class LottieView extends LottieViewBase {
  private _contentMode: any;
  private _animationView: any;

  constructor() {
    super();
    this.nativeView = UIView.new();
  }

  /// LOTAnimationView
  get ios(): any {
    return this.nativeView;
  }

  // tslint:disable-next-line:member-access
  [srcProperty.setNative](src: string) {
    if (this._animationView) {
      this._animationView.removeFromSuperview();
      this._animationView = null;
    }
    this.createAnimationView(src);
  }

  private createAnimationView(src: string) {
    if (!this.getMeasuredHeight()) {
      setTimeout(() => this.createAnimationView(src), 50);
      return;
    }

    this._animationView = LOTAnimationView.animationNamed(src);
    this.contentModeDefault();
    this.ios.addSubview(this._animationView);

    const scale = screen.mainScreen.scale;
    const newFrameHeight = this.getMeasuredHeight() / scale;
    const newFrameWidth = this.getMeasuredWidth() / scale;

    const newFrame = CGRectMake(0, 0, newFrameWidth, newFrameHeight);

    this._animationView.frame = newFrame;

    if (this.loop) {
      this.setLoopAnimation(this.loop);
    }

    if (this.autoPlay) {
      this.playAnimation().then(
        finished => {
          // ignore
          // TODO: could add debug mode which would log that it finished
        },
        err => {
          // ignore (however note todo above)
        }
      );
    }
  }

  // tslint:disable-next-line:member-access
  [loopProperty.setNative](loop: boolean) {
    this.setLoopAnimation(this.loop);
  }

  private setLoopAnimation(loop: boolean) {
    if (this._animationView) {
      this._animationView.loopAnimation = loop;
    }
  }

  // tslint:disable-next-line:member-access
  [autoPlayProperty.setNative](autoPlay: boolean) {
    if (autoPlay) {
      this.setLoopAnimation(this.loop);
      this.contentModeDefault();

      if (!this.isAnimating()) {
        this.playAnimation().then(
          finished => {
            // ignore
            // TODO: could add debug mode which would log that it finished
          },
          err => {
            // ignore (however note todo above)
          }
        );
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
    if (this._animationView && value && keyPath && keyPath.length) {
      if (keyPath[keyPath.length - 1].toLowerCase() !== 'color') {
        keyPath.push('Color'); // ios expects the property as the last item in the keyPath
      }
      this._animationView.setValueDelegateForKeypath(
        LOTColorValueCallback.withCGColor(value.ios.CGColor),
        LOTKeypath.keypathWithString(keyPath.join('.'))
      );
    }
  }

  public onLoaded() {
    super.onLoaded(); // ensure 'loaded' event fires
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
    super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    const nativeView = this.nativeView;
    if (nativeView) {
      const measuredWidth = layout.getMeasureSpecSize(widthMeasureSpec);
      const measuredHeight = layout.getMeasureSpecSize(heightMeasureSpec);

      const scale = screen.mainScreen.scale;
      const width =
        typeof this.width === 'number' ? this.width : measuredWidth / scale;
      const height =
        typeof this.height === 'number' ? this.height : measuredHeight / scale;
      this.setMeasuredDimension(measuredWidth, measuredHeight);
      if (this._animationView) {
        const newFrame = CGRectMake(0, 0, width, height);
        this._animationView.frame = newFrame;
      }
    }
  }

  public playAnimation(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this._animationView) {
        this._animationView.playWithCompletion((animationFinished: boolean) => {
          if (this.completionBlock) {
            this.completionBlock(animationFinished);
          }
          resolve(animationFinished);
        });
      } else {
        reject(new Error("The iOS lottie view isn't loaded yet."));
      }
    });
  }

  public playAnimationFromProgressToProgress(
    startProgress: number,
    endProgress: number
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this._animationView) {
        startProgress = startProgress ? clamp(startProgress) : 0;
        endProgress = endProgress ? clamp(endProgress) : 1;
        this._animationView.playFromProgressToProgressWithCompletion(
          startProgress,
          endProgress,
          (animationFinished: boolean) => {
            if (this.completionBlock) {
              this.completionBlock(animationFinished);
            }
            resolve(animationFinished);
          }
        );
      } else {
        reject(new Error("The iOS lottie view isn't loaded yet."));
      }
    });
  }

  public cancelAnimation(): void {
    if (this._animationView) {
      this._animationView.pause();
    }
  }

  public isAnimating(): boolean {
    let result = false;
    if (this._animationView) {
      result = this._animationView.isAnimationPlaying;
    }
    return result;
  }

  public set progress(value: number) {
    if (typeof value !== 'undefined' && this._animationView) {
      this._animationView.animationProgress = value;
    }
  }

  public get progress(): number {
    let progress = null;
    if (this._animationView) {
      progress = this._animationView.animationProgress;
    }
    return progress;
  }

  public set speed(value: number) {
    if (typeof value !== 'undefined' && this._animationView) {
      this._animationView.animationSpeed = value;
    }
  }

  public get speed(): number {
    let speed = null;
    if (this._animationView) {
      speed = this._animationView.animationSpeed;
    }
    return speed;
  }

  public get duration(): number {
    let duration = null;
    if (this._animationView) {
      duration = this._animationView.animationDuration;
    }
    return duration;
  }

  public set contentMode(mode: any) {
    this._contentMode = mode;
    if (this._animationView) {
      this._animationView.contentMode = mode;
    }
  }

  // ensures a reasonable default contentMode is set
  // https://github.com/airbnb/lottie-ios#using-lottie
  private contentModeDefault() {
    if (this._animationView) {
      if (this._contentMode) {
        this._animationView.contentMode = this._contentMode;
      } else {
        // default
        this._animationView.contentMode = UIViewContentMode.ScaleAspectFit;
      }
    }
  }
}

function clamp(val: number, min: number = 0, max: number = 1) {
  return val > max ? max : val < min ? min : val;
}
