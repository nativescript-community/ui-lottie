/**********************************************************************************
* (c) 2017, Brad Martin.
* Licensed under the MIT license.
*
* Version 1.0.0                                           bradwaynemartin@gmail.com
**********************************************************************************/
"use strict";

import { View } from "tns-core-modules/ui/core/view";
import { Property } from 'tns-core-modules/ui/core/properties';
import { LottieViewBase, srcProperty, loopProperty, autoPlayProperty, cacheStrategyProperty } from "./nativescript-lottie.common";

declare var com: any;
declare var android: any;
declare var org: any;

const LottieAnimationView: any = com.airbnb.lottie.LottieAnimationView;

export class LottieView extends LottieViewBase {

  private _srcSet: boolean = false;

  constructor() {
    super();
  }

  /// com.airbnb.lottie.LottieAnimationView
  get android(): any {
    return this.nativeView;
  }

  public createNativeView(): View {
    let nativeView = new LottieAnimationView(this._context);

    try {

      if (this.src) {
        if (this.cacheStrategy) {
          nativeView.setAnimation(this.src, this.cacheStrategy);
        } else {
          nativeView.setAnimation(this.src);
        }
      }

      if (this.loop) {
        nativeView.loop(true);
      }

      if (this.autoPlay) {
        nativeView.playAnimation();
      }

    } catch (error) {
      throw error;
    }

    return nativeView;
  }

  [srcProperty.setNative](src: string) {
    this.setSrc(src);
  }

  private setSrc(src: string) {
    if (this.cacheStrategy) {
      this.nativeView.setAnimation(src, this.cacheStrategy);
    } else {
      this.nativeView.setAnimation(src);
    }
  }

  [loopProperty.setNative](loop: boolean) {
    if (loop) {
      this.nativeView.loop(true);
      if (this.autoPlay && !this.isAnimating()) {
        this.playAnimation();
      }
    } else {
      this.nativeView.loop(false);
    }
  }

  [cacheStrategyProperty.setNative](cacheStrategy: CacheStrategy) {
    this.setSrc(this.src);
  }

  [autoPlayProperty.setNative](autoPlay: boolean) {
    if (autoPlay) {
      if (!this.isAnimating()) {
        this.playAnimation();
      }
    } else {
      this.cancelAnimation();
    }
  }


  public playAnimation(): void {
    if (this.nativeView) {
      this.nativeView.playAnimation();
    }
  }


  public isAnimating(): boolean {
    let isAnimating = false;
    if (this.nativeView.isAnimating()) {
      isAnimating = true;
    }
    return isAnimating;
  }


  public setProgress(value: number): void {
    if (this.nativeView && value) {
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
