/**********************************************************************************
* (c) 2017, Brad Martin.
* Licensed under the MIT license.
*
* Version 1.0.0                                           bradwaynemartin@gmail.com
**********************************************************************************/
"use strict";

import { View } from "ui/core/view";

declare var LAAnimationView: any;

export class LottieView extends View {
  private _src: string;
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
    console.log('setting src:', value);
    this._src = value;
  }

  public onLoaded() {
    console.log('lottie onLoaded');
    if (this._src) {
      this._ios = LAAnimationView.animationNamed(this._src);
      console.log(this._ios);
      this.playAnimation();
    }
  }

  public playAnimation(): void {
    if (this._ios) {
      this._ios.playWithCompletion((animationFinished: boolean) => {
        console.log('animationFinished:', animationFinished);
      });
    }
  }

  public cancelAnimation(): void {
    if (this._ios) {
      console.log('unsupported');
    }
  }

}
