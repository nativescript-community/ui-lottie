/**********************************************************************************
* (c) 2017, Nathan Walker.
* Licensed under the MIT license.
*
* Version 1.0.0                                           walkerrunpdx@gmail.com
**********************************************************************************/
"use strict";

import { LottieViewBase, srcProperty, loopProperty, autoPlayProperty } from "./nativescript-lottie.common";

declare var LOTAnimationView: any, UIViewContentModeScaleAspectFit;

export class LottieView extends LottieViewBase {
  private _contentMode: any;

  constructor() {
    super();
  }

  /// LOTAnimationView
  get ios(): any {
    return this.nativeView;
  }

  [srcProperty.setNative](src: string) {
    if (!this.nativeView) {
      this.nativeView = LOTAnimationView.animationNamed(src);
      this.contentModeDefault();
    }
  }

  [loopProperty.setNative](loop: boolean) {
    if (this.nativeView) {
      this.nativeView.loopAnimation = loop;
    }
  }

  // [autoPlayProperty.setNative](autoPlay: boolean) {

  // }

  public onLoaded() {
    super.onLoaded(); // ensure 'loaded' event fires
    if (this.nativeView) {
      if (this.autoPlay) {
        // ensure loop is set properly before starting
        this.nativeView.loopAnimation = this.loop;
        this.contentModeDefault();
        this.playAnimation();
      }
    }
  }

  public playAnimation(): Promise<any> {
    return new Promise((resolve) => {
      if (this.nativeView) {
        this.nativeView.playWithCompletion((animationFinished: boolean) => {
          // console.log('animationFinished:', animationFinished);
          resolve(animationFinished);
        });
      }
    })
  }

  public cancelAnimation(): void {
    if (this.nativeView) {
      this.nativeView.pause();
    }
  }

  public isAnimating(): boolean {
    if (this.nativeView) {
      return this.nativeView.isAnimationPlaying;
    } else {
      return false;
    }
  }

  public setProgress(value: number): void {
    if (typeof value !== 'undefined' && this.nativeView) {
      this.nativeView.animationProgress = value;
    }
  }

  public setSpeed(value: number): void {
    if (this.nativeView) {
      this.nativeView.animationSpeed = value;
    }
  }

  public progress(): number {
    if (this.nativeView) {
      return this.nativeView.animationProgress;
    }
  }

  public duration(): number {
    if (this.nativeView) {
      return this.nativeView.animationDuration;
    }
  }

  public set contentMode(mode: any) {
    this._contentMode = mode;
    if (this.nativeView) {
      this.nativeView.contentMode = mode;
    }
  }

  // ensures a reasonable default contentMode is set
  // https://github.com/airbnb/lottie-ios#using-lottie
  private contentModeDefault() {
    if (this.nativeView) {
      if (this._contentMode) {
        this.nativeView.contentMode = this._contentMode;
      } else {
        // default
        this.nativeView.contentMode = UIViewContentModeScaleAspectFit;
      }
    }
  }

}
