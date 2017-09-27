/**********************************************************************************
* (c) 2017, Brad Martin.
* Licensed under the MIT license.
*
* Version 1.0.0                                           bradwaynemartin@gmail.com
**********************************************************************************/
"use strict";

import { View } from "tns-core-modules/ui/content-view";

declare var com: any;
declare var android: any;
declare var org: any;

const LottieAnimationView: any = com.airbnb.lottie.LottieAnimationView;

export class LottieView extends View {
  private _src: string;
  private _loop: boolean;
  private _autoPlay: boolean;
  private _cacheStrategy: CacheStrategy;

  constructor() {
    super();
  }

  /// com.airbnb.lottie.LottieAnimationView
  get android(): any {
    return this.nativeView;
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

  public createNativeView(): View {
    let nativeView = new LottieAnimationView(this._context);

    try {

      if (this._src) {
        if (this._cacheStrategy) {
          nativeView.setAnimation(this._src, this._cacheStrategy);
        } else {
          nativeView.setAnimation(this._src);
        }
      } else {
        throw new Error("The src property is required.");
      }

      if (this._loop) {
        nativeView.loop(true);
      }

      if (this._autoPlay) {
        nativeView.playAnimation();
      }

    } catch (error) {
      console.log(error);
    }

    return nativeView;
  }


  public playAnimation(): void {
    if (this.nativeView) {
      this.nativeView.playAnimation();
    }
  }


  public isAnimating(): boolean {
    if (this.nativeView.isAnimating()) {
      return true;
    } else {
      return false;
    }
  }


  public setProgress(value): void {
    if (value) {
      this.nativeView.setProgress(value);
    }
  }


  public cancelAnimation(): void {
    if (this.nativeView) {
      this.nativeView.cancelAnimation();
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
