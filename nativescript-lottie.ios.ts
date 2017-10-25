/**********************************************************************************
* (c) 2017, Nathan Walker.
* Licensed under the MIT license.
*
* Version 1.0.0                                           walkerrunpdx@gmail.com
**********************************************************************************/
"use strict";

import { View, layout } from "tns-core-modules/ui/core/view";
import { Property } from 'tns-core-modules/ui/core/properties';
import { LottieViewBase, srcProperty, loopProperty, autoPlayProperty } from "./nativescript-lottie.common";
import { topmost } from "tns-core-modules/ui/frame/frame";

declare var LOTAnimationView: any,
  UIViewContentModeScaleAspectFit: any,
  CGRectMake: any,
  UIView: any;

export class LottieView extends LottieViewBase {

  private _contentMode: any;
  private _animationView: any;

  constructor() {
    super();
    this.nativeView = new UIView();
  }


  /// LOTAnimationView
  get ios(): any {
    return this.nativeView;
  }

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

    let newFrameHeight = this.getMeasuredHeight() > 0 ? this.getMeasuredHeight() / 2 : (typeof this.height === "number" ? this.height : 150),
      newFrameWidth = this.getMeasuredWidth() > 0 ? this.getMeasuredWidth() / 2 : (typeof this.width === "number" ? this.width : 150);

    let newFrame = CGRectMake(0, 0, newFrameWidth, newFrameHeight);
    this._animationView.frame = newFrame;

    if (this.loop) {
      this._animationView.loopAnimation = this.loop;
    }

    if (this.autoPlay) {
      this.playAnimation();
    }

  }

  [loopProperty.setNative](loop: boolean) {
    if (this._animationView) {
      this._animationView.loopAnimation = loop;
      if (this.autoPlay && !this.isAnimating() && loop) {
        this.playAnimation();
      }
    }
  }

  [autoPlayProperty.setNative](autoPlay: boolean) {
    if (autoPlay) {
      this._animationView.loopAnimation = this.loop;
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
      const width = layout.getMeasureSpecSize(widthMeasureSpec);
      const height = layout.getMeasureSpecSize(heightMeasureSpec);
      this.setMeasuredDimension(width, height);
      if (this._animationView) {
        let newFrame = CGRectMake(0, 0, width / 2, height / 2);
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
    })
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

  public setProgress(value: number): void {
    if (typeof value !== 'undefined' && this._animationView) {
      this._animationView.animationProgress = value;
    }
  }

  public setSpeed(value: number): void {
    if (this._animationView) {
      this._animationView.animationSpeed = value;
    }
  }

  public progress() {
    if (this._animationView) {
      return this._animationView.animationProgress;
    }
  }

  public duration() {
    if (this._animationView) {
      return this._animationView.animationDuration;
    }
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
        this._animationView.contentMode = UIViewContentModeScaleAspectFit;
      }
    }
  }

}
