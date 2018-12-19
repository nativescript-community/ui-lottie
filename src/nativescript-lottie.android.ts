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
  cacheStrategyProperty
} from './nativescript-lottie.common';

const LottieProperty = com.airbnb.lottie.LottieProperty;
const LottieKeyPath = com.airbnb.lottie.model.KeyPath;
const LottieValueCallback = com.airbnb.lottie.value.LottieValueCallback;

const DEFAULT_MAX_PROGRESS: number = 1;
const DEFAULT_MIN_PROGRESS: number = 0;

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
      nativeView.addAnimatorListener(
        new android.animation.Animator.AnimatorListener({
          onAnimationCancel: _animator => {
            if (this.completionBlock) {
              this.completionBlock(false);
            }
          },
          onAnimationEnd: _animator => {
            if (this.completionBlock) {
              this.completionBlock(true);
            }
          },
          onAnimationRepeat: _animator => {
            // console.log('onAnimationRepeat');
          },
          onAnimationStart: _animator => {
            // console.log('onAnimationStart');
          }
        })
      );
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

  public disposeNativeView(): void {
    this.nativeView.removeAllAnimatorListeners();
    this.nativeView = null;

    super.disposeNativeView();
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

  public [cacheStrategyProperty.setNative](_cacheStrategy: CacheStrategy) {
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

  public setColorValueDelegateForKeyPath(
    value: Color,
    keyPath: string[]
  ): void {
    if (this.nativeView && value && keyPath && keyPath.length) {
      if (keyPath[keyPath.length - 1].toLowerCase() === 'color') {
        keyPath.pop(); // android specifies the property as an enum parameter.
        if (keyPath.length === 0) {
          return;
        }
      }
      const nativeKeyPath: java.lang.String[] = Array.create(
        java.lang.String,
        keyPath.length
      );
      keyPath.forEach((key, index) => {
        nativeKeyPath[index] = new java.lang.String(key);
      });
      this.nativeView.addValueCallback(
        new LottieKeyPath(nativeKeyPath),
        LottieProperty.COLOR,
        new LottieValueCallback(new java.lang.Integer(value.android))
      );
    }
  }

  public playAnimation(): void {
    if (this.nativeView) {
      this.nativeView.setMinAndMaxProgress(
        DEFAULT_MIN_PROGRESS,
        DEFAULT_MAX_PROGRESS
      );
      this.nativeView.playAnimation();
    }
  }

  public playAnimationFromProgressToProgress(
    startProgress: number,
    endProgress: number
  ): void {
    if (this.nativeView) {
      startProgress = startProgress ? clamp(startProgress) : 0;
      endProgress = endProgress ? clamp(endProgress) : 1;
      this.nativeView.setMinAndMaxProgress(startProgress, endProgress);
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

function clamp(val: number, min: number = 0, max: number = 1) {
  return val > max ? max : val < min ? min : val;
}
