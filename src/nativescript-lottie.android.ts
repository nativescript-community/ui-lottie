/**********************************************************************************
 * (c) 2017, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

import { Color, View } from 'tns-core-modules/ui/core/view';
import { clamp } from './utils';
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
  /// com.airbnb.lottie.LottieAnimationView
  get android(): any {
    return this.nativeView;
  }

  public createNativeView(): View {
    return new com.airbnb.lottie.LottieAnimationView(this._context);
  }

  public initNativeView(): void {
    this.nativeView.addAnimatorListener(
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
          // noop
        },
        onAnimationStart: _animator => {
          // noop
        }
      })
    );

    if (this.src) {
      this.setSrc(this.src);
    }

    if (this.loop) {
      this.nativeView.loop(this.loop);
    }

    if (this.autoPlay) {
      this.playAnimation();
    }
  }

  public disposeNativeView(): void {
    this.nativeView.removeAllAnimatorListeners();

    super.disposeNativeView();
  }

  public [srcProperty.setNative](src: string) {
    this.setSrc(src);
  }

  private setSrc(src: string) {
    if (this.nativeView) {
      // allows passing the lottie json asset without the file extension
      // github issue: https://github.com/bradmartin/nativescript-lottie/issues/37
      src = /.json$/.test(src) ? src : `${src}.json`;

      if (this.cacheStrategy) {
        this.nativeView.setAnimation(src, this.cacheStrategy);
      } else {
        this.nativeView.setAnimation(src);
      }

      if (this.loop) {
        this.setLoopAnimation(this.loop);
      }

      if (this.autoPlay) {
        this.playAnimation();
      }
    }
  }

  public [cacheStrategyProperty.setNative](_cacheStrategy: CacheStrategy) {
    this.setSrc(this.src);
  }

  public [loopProperty.setNative](loop: boolean) {
    this.setLoopAnimation(loop);
  }

  private setLoopAnimation(loop: boolean): void {
    if (this.nativeView) {
      this.nativeView.loop(loop);
    }
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

  public setOpacityValueDelegateForKeyPath(
    value: number,
    keyPath: string[]
  ): void {
    if (this.nativeView && value && keyPath && keyPath.length) {
      if (keyPath[keyPath.length - 1].toLowerCase() === 'opacity') {
        keyPath.pop();
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
      value = clamp(value);
      this.nativeView.addValueCallback(
        new LottieKeyPath(nativeKeyPath),
        LottieProperty.OPACITY,
        new LottieValueCallback(new java.lang.Integer(value * 100))
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
    return this.nativeView ? this.nativeView.isAnimating() : false;
  }

  public set progress(value: number) {
    if (this.nativeView && value) {
      this.nativeView.setProgress(value);
    }
  }

  public get progress(): number | undefined {
    return this.nativeView ? this.nativeView.getProgress() : undefined;
  }

  public get speed(): number | undefined {
    return this.nativeView ? this.nativeView.getSpeed() : undefined;
  }

  public set speed(value: number) {
    if (this.nativeView && value) {
      this.nativeView.setSpeed(value);
    }
  }

  public get duration(): number | undefined {
    return this.nativeView ? this.nativeView.getDuration() : undefined;
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
