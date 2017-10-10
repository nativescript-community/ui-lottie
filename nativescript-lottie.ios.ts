/**********************************************************************************
* (c) 2017, Nathan Walker.
* Licensed under the MIT license.
*
* Version 1.0.0                                           walkerrunpdx@gmail.com
**********************************************************************************/
"use strict";

import { View } from "tns-core-modules/ui/core/view";
import { Property } from 'tns-core-modules/ui/core/properties';
import { LottieViewBase, srcProperty, loopProperty, autoPlayProperty } from "./nativescript-lottie.common";
import { topmost } from "tns-core-modules/ui/frame/frame";

declare var LOTAnimationView: any,
  LOTComposition: any,
  UIViewContentModeScaleAspectFit: any,
  CGRectMake: any,
  UIView: any,
  CGRectGetWidth: any;

class TestView extends View {
  constructor() {
    super();
  }

  public createNativeView(): View {

    let nativeView = LOTAnimationView.animationNamed("HamburgerArrow.json");

    return nativeView;
  }
}
export class LottieView extends LottieViewBase {

  private _contentMode: any;
  private _srcSet: boolean;
  private _animationView: any;

  constructor() {
    super();


    // this.nativeView = LOTAnimationView.animationNamed("HamburgerArrow.json");
    // this.contentModeDefault();
    this.nativeView = new UIView();
  }


  /// LOTAnimationView
  get ios(): any {
    return this.nativeView;
  }

  [srcProperty.setNative](src: string) {

    console.log(src);
    if (this._animationView) {
      this._animationView.removeFromSuperview();
      this._animationView = null;
    }

    this._animationView = LOTAnimationView.animationNamed(src);
    this.contentModeDefault();
    console.log(this.ios.center.x);
    this.ios.autoresizesSubviews = true;
    this.ios.addSubview(this._animationView);
    //this.ios.bringSubviewToFront(this._animationView);
    //this._animationView.bounds = this.ios.bounds;
    let newFrame = CGRectMake(0, 0, 150, 150);
    this._animationView.frame = newFrame;
    // this._animationView.frame.origin.x = 0;
    // this._animationView.frame.origin.y = 0;
    // this._animationView.frame.size.width = this.width;
    // this._animationView.frame.size.height = this.height;
    // this.ios.bounds = this._animationView.bounds;
    this.playAnimation();
    //topmost().ios.controller.view.addSubview(this._animationView);
    //this.playAnimation();
    // console.log(this.nativeView.addSubView);
    // this.nativeView.view.addSubView(animationView);

    // let comp = LOTComposition.
    // this.nativeView = LOTAnimationView.animationNamed(src);
    // this.contentModeDefault();
    // this._srcSet = true;
    // }
  }

  [loopProperty.setNative](loop: boolean) {
    console.log("setting loop: ", loop);
    if (this._animationView) {
      this._animationView.loopAnimation = this.loop;
    }
  }

  [autoPlayProperty.setNative](autoPlay: boolean) {
    if (autoPlay) {
      this._animationView.loopAnimation = this.loop;
      this.contentModeDefault();
      this.playAnimation();
    } else {
      if (this.isAnimating()) {
        this.cancelAnimation();
      }
    }
  }

  public onLoaded() {
    super.onLoaded(); // ensure 'loaded' event fires
    console.log(this.ios.frame.size.width, this.ios.frame.size.height);
    console.log(this.effectiveWidth, this.effectiveHeight);
    console.log(this.height, this.width);
    console.log(this.getMeasuredHeight(), this.getMeasuredWidth());
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
