/**********************************************************************************
* (c) 2017, Nathan Walker.
* Licensed under the MIT license.
*
* Version 1.0.0                                           walkerrunpdx@gmail.com
**********************************************************************************/
"use strict";

import { View } from "ui/core/view";

declare var LAAnimationView: any, UIViewContentModeScaleAspectFit;

export class LottieView extends View {
  private _src: string;
  private _autoPlay: boolean;
  private _loop: boolean;
  private _contentMode: any;
  private _ios: any;

  constructor() {
    super();
  }

  /// LAAnimationView
  get ios(): any {
    return this._ios;
  }
  /// LAAnimationView
  get _nativeView(): any {
    return this._ios;
  }

  get src(): string {
    return this._src;
  }
  set src(value: string) {
    // console.log('setting src:', value);
    this._src = value;
    if (!this._ios) {
      this._ios = LAAnimationView.animationNamed(this._src);
      this.contentModeDefault();
    }
  }

  get loop(): boolean {
    return this._loop;
  }

  set loop(value: boolean) {
    this._loop = value;
    if (this._ios) {
      this._ios.loopAnimation = this._loop;
    }
  }

  get autoPlay(): boolean {
    return this._autoPlay;
  }

  set autoPlay(value: boolean) {
    this._autoPlay = value;
  }

  public onLoaded() {
    // console.log('lottie onLoaded');
    if (this._ios) {
      // console.log(this._ios);
      if (this._autoPlay) {
        // ensure loop is set properly before starting
        this._ios.loopAnimation = this._loop;
        this.contentModeDefault();
        this.playAnimation();
      }
    }
  }

  public playAnimation(): Promise<any> {
    return new Promise((resolve) => {
      if (this._ios) {
        this._ios.playWithCompletion((animationFinished: boolean) => {
          // console.log('animationFinished:', animationFinished);
          resolve(animationFinished);
        });
      }
    })
  }

  public cancelAnimation(): void {
    if (this._ios) {
      this._ios.pause();
    }
  }

  public isAnimating(): boolean {
    if (this._ios) {
      return this._ios.isAnimationPlaying;
    } else {
      return false;
    }
  }

  public setProgress(value: number): void {
    if (typeof value !== 'undefined' && this._ios) {
      this._ios.animationProgress = value;
    }
  }

  public setSpeed(value: number): void {
    if (this._ios) {
      this._ios.animationSpeed = value;
    }
  }

  public progress(): number {
    if (this._ios) {
      return this._ios.animationProgress;
    }
  }

  public duration(): number {
    if (this._ios) {
      return this._ios.animationDuration;
    }
  }

  public set contentMode(mode: any) {
    this._contentMode = mode;
    if (this._ios) {
      this._ios.contentMode = mode;
    }
  }

  // ensures a reasonable default contentMode is set
  // https://github.com/airbnb/lottie-ios#using-lottie
  private contentModeDefault() {
    if (this._ios) {
      if (this._contentMode) {
        this._ios.contentMode = this._contentMode;
      } else {
        // default
        this._ios.contentMode = UIViewContentModeScaleAspectFit;
      }
    }
  }

}
