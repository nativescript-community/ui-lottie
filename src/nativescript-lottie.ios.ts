/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/
/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />

import { View, layout } from 'tns-core-modules/ui/core/view';
import { Property } from 'tns-core-modules/ui/core/properties';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { LottieViewBase, srcProperty, loopProperty, autoPlayProperty } from './nativescript-lottie.common';

declare var LOTAnimationView: any;

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
    this._animationView = LOTAnimationView.animationNamed(src);
    this.contentModeDefault();
    this.ios.addSubview(this._animationView);

    const newFrameHeight =
      typeof this.height === 'number' ? this.height : this.getMeasuredHeight() > 0 ? this.getMeasuredHeight() / 2 : 150;
    const newFrameWidth =
      typeof this.width === 'number' ? this.width : this.getMeasuredWidth() > 0 ? this.getMeasuredWidth() / 3 : 150;

    const newFrame = CGRectMake(0, 0, newFrameWidth, newFrameHeight);

    this._animationView.frame = newFrame;

    if (this.loop) {
      this.setLoopAnimation(this.loop);
    }

    if (this.autoPlay) {
      this.playAnimation();
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
        this.playAnimation();
      }
    } else {
      if (this.isAnimating()) {
        this.cancelAnimation();
      }
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
      const width = typeof this.width === 'number' ? this.width : measuredWidth / 3;
      const height = typeof this.height === 'number' ? this.height : measuredHeight / 2;
      this.setMeasuredDimension(measuredWidth, measuredHeight);
      if (this._animationView) {
        const newFrame = CGRectMake(0, 0, width, height);
        this._animationView.frame = newFrame;
      }
    }
  }

  public playAnimation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this._animationView) {
        this._animationView.playWithCompletion((animationFinished: boolean) => {
          // console.log('animationFinished:', animationFinished);
          resolve(animationFinished);
        });
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
