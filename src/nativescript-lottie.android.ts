/**********************************************************************************
 * (c) 2017, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

import { Color, View } from 'tns-core-modules/ui/core/view';
import {
  LottieViewBase,
  srcProperty,
  loopProperty,
  autoPlayProperty,
  cacheStrategyProperty,
  Theme,
  themeProperty
} from './nativescript-lottie.common';

const LottieProperty = com.airbnb.lottie.LottieProperty;
const LottieHelper = com.nativescript_lottie.LottieHelper;

declare var com: any;

export class LottieView extends LottieViewBase {
  constructor() {
    super();
  }

  /// com.airbnb.lottie.LottieAnimationView
  get android(): any {
    return this.nativeView;
  }

  public createNativeView(): View {
    const nativeView = new com.airbnb.lottie.LottieAnimationView(this._context);

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

  public [srcProperty.setNative](src: string) {
    this.setSrc(src);
  }

  private setSrc(src: string) {
    if (this.cacheStrategy) {
      this.nativeView.setAnimation(src, this.cacheStrategy);
    } else {
      this.nativeView.setAnimation(src);
    }

    if (this.autoPlay) {
      this.playAnimation();
    }
  }

  public [loopProperty.setNative](loop: boolean) {
    if (loop) {
      this.nativeView.loop(true);
    } else {
      this.nativeView.loop(false);
    }
  }

  public [cacheStrategyProperty.setNative](cacheStrategy: CacheStrategy) {
    this.setSrc(this.src);
  }

  public [autoPlayProperty.setNative](autoPlay: boolean) {
    if (autoPlay) {
      if (!this.isAnimating()) {
        this.playAnimation();
      }
    } else {
      if (this.isAnimating()) {
        this.cancelAnimation();
      }
    }
  }

  // todo: add more dynamic properties
  public [themeProperty.setNative](value: Theme[]) {
    this.setTheme(value);
  }

  public setTheme(value: Theme[]) {
    if (!this.nativeView) {
      return;
    }

    if (value && value.length) {
      value.forEach(dynamicValue => {
        const callBack = LottieHelper.getIntCallback(
          new Color(dynamicValue.value).android
        );
        const keyPath = LottieHelper.keyPath(dynamicValue.keyPath);
        this.nativeView.addValueCallback(
          keyPath,
          LottieProperty.COLOR,
          callBack
        );
      });
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

  public set progress(value: number) {
    if (this.nativeView && value) {
      this.nativeView.setProgress(value);
    }
  }

  public get progress(): number {
    let progress = null;
    if (this.nativeView) {
      progress = this.nativeView.getProgress();
    }
    return progress;
  }

  public get speed(): number {
    const speed = null;
    if (this.nativeView) {
      this.nativeView.getSpeed();
    }
    return speed;
  }

  public set speed(newSpeed: number) {
    if (this.nativeView) {
      this.nativeView.setSpeed(newSpeed);
    }
  }

  public get duration(): number {
    let duration = null;
    if (this.nativeView) {
      duration = this.nativeView.getDuration();
    }
    return duration;
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
