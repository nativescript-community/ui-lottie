/**********************************************************************************
* (c) 2017, Brad Martin.
* Licensed under the MIT license.
*
* Version 1.0.0                                           bradwaynemartin@gmail.com
**********************************************************************************/
"use strict";

import { View } from "ui/core/view";

declare var com: any;
declare var android: any;
declare var org: any;

const LottieAnimationView: any = com.airbnb.lottie.LottieAnimationView;

export class LottieView extends View {
  private _src: string;
  private _loop: boolean;
  private _autoPlay: boolean;
  private _cacheStrategy: CacheStrategy;
  private _android: any; /// com.airbnb.lottie.LottieAnimationView;

  constructor() {
    super();
  }

  /// com.airbnb.lottie.LottieAnimationView
  get android(): any {
    return this._android;
  }
  ///com.airbnb.lottie.LottieAnimationView
  get _nativeView(): any {
    return this._android;
  }

  get src(): string {
    return this._src;
  }
  set src(value: string) {
    this._src = value;
  }

  get loop(): boolean {
    return this._loop;
  }
  set loop(value: boolean) {
    this._loop = value;
  }

  get cacheStrategy(): CacheStrategy {
    return this._cacheStrategy;
  }
  set cacheStrategy(value: CacheStrategy) {
    this._cacheStrategy = value;
  }

  get autoPlay(): boolean {
    return this._autoPlay;
  }
  set autoPlay(value: boolean) {
    this._autoPlay = value;
  }


  public _createUI(): void {
    try {
      this._android = new LottieAnimationView(this._context);
      this._android.setAnimation(this._src, this._cacheStrategy);
      this._android.loop(this._loop);

      if (this._autoPlay) {
        this._android.playAnimation();
      }

    } catch (err) {
      console.log(err);
    }
  }


  public playAnimation(): void {
    if (this._android) {
      this._android.playAnimation();
    }
  }


  public isAnimating(): boolean {
    if (this._android.isAnimating()) {
      return true;
    } else {
      return false;
    }
  }


  public setProgress(value): void {
    if (value) {
      this._android.setProgress(value);
    }
  }


  public cancelAnimation(): void {
    if (this._android) {
      this._android.cancelAnimation();
    }
  }

}

/**
 * Caching strategy for compositions that will be reused frequently.
 * Weak or Strong indicates the GC reference strength of the composition in the cache.
 */
export enum CacheStrategy {
  None = com.airbnb.lottie.LottieAnimationView.CacheStrategy.None,
  Weak = com.airbnb.lottie.LottieAnimationView.CacheStrategy.Weak,
  Strong = com.airbnb.lottie.LottieAnimationView.CacheStrategy.Strong
}
