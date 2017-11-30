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


    let newFrameHeight = typeof this.height === "number" ? this.height : (this.getMeasuredHeight() > 0 ? this.getMeasuredHeight() / 2 : 150),
      newFrameWidth = typeof this.width === "number" ? this.width : (this.getMeasuredWidth() > 0 ? this.getMeasuredWidth() / 3 : 150);

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
    }
  }

  [autoPlayProperty.setNative](autoPlay: boolean) {
    if (autoPlay) {
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
      const width = (typeof this.width === "number") ? this.width : measuredWidth / 3;
      const height = (typeof this.height === "number") ? this.height : measuredHeight / 2;
      this.setMeasuredDimension(measuredWidth, measuredHeight);
      if (this._animationView) {
        let newFrame = CGRectMake(0, 0, width, height);
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

  public set progress(value: number) {
    if (typeof value !== 'undefined' && this._animationView) {
      this._animationView.animationProgress = value;
    }
  }

  public get progress(): number {
    return this._animationView.animationProgress;
  }

  public set frame(frame: number) {
    if (this._animationView) {
      this._animationView.setProgressWithFrame(frame);
    }
  }

  public get frame() {
    return this._animationView.animationProgress;
  }

  public set speed(value: number) {
    if (this._animationView) {
      this._animationView.animationSpeed = value;
    }
  }

  public get speed(): number {
    return this._animationView.getSpeed();
  }


  public get duration(): any {
    if (this._animationView) {
      return this._animationView.animationDuration;
    }
  }

  public get contentMode(): any {
    return this._contentMode;
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
