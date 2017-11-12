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

    if (this.autoPlay) {
      this.playAnimation();
    }
  }

  [loopProperty.setNative](loop: boolean) {
    if (loop) {
      this.nativeView.loop(true);
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
      if (this.isAnimating()) {
        this.cancelAnimation();
      }
    }
  }

  /**
   * Plays the animation from the beginning. If speed is < 0, it will start at the end
   * and play towards the beginning
   */
  public playAnimation(): void {
    if (this.nativeView) {
      this.nativeView.playAnimation();
    }
  }

  /**
   * Continues playing the animation from its current position. If speed < 0, it will play backwards
   * from the current position.
   */
  public resumeAnimation(): void {
    if (this.nativeView) {
      this.nativeView.resumeAnimation();
    }
  }

  /**
   * Stop animation.
   */
  public cancelAnimation(): void {
    if (this.nativeView) {
      this.nativeView.cancelAnimation();
    }
  }


  public isAnimating(): boolean {
    let isAnimating = false;
    if (this.nativeView.isAnimating()) {
      isAnimating = true;
    }
    return isAnimating;
  }

  public get duration(): number {
    return this.nativeView.getDuration();
  }

  public set progress(value: number) {
    if (this.nativeView && value) {
      this.nativeView.setProgress(value);
    }
  }

  /**
 * Sets the minimum progress that the animation will start from when playing or looping.
 */
  public set minProgress(startProgress: number) {
    this.nativeView.setMinProgress(startProgress);
  }

  /**
   * Sets the maximum progress that the animation will end at when playing or looping.
   */
  public set maxProgress(endProgress: number) {
    if (this.nativeView && this.isInRightRange([endProgress])) {
      this.nativeView.setMaxProgress(endProgress);
    } else {
      throw new Error("Progress must be a float between 0 and 1.");
    }
  }


  private isInRightRange(numbers: number[]): boolean {
    numbers.filter((number) => number >= 0 && number <= 1);
    return numbers.length > 0;
  }
  /**
   * see setMinProgress(number)
   * and
   * see setMaxProgress(number)
   */
  public setMinAndMaxProgress(minProgress: number, maxProgress: number) {
    if (this.nativeView && this.isInRightRange([minProgress, maxProgress])) {
      this.nativeView.setMinAndMaxProgress(minProgress, maxProgress);
    }
  }

  public get progress() {
    return this.nativeView.getProgress();
  }

  /**
   * Sets the playback speed. If speed < 0, the animation will play backwards.
   */
  public set speed(value: number) {
    if (this.nativeView && value) {
      this.nativeView.setSpeed(value);
    }
  }

  /**
   * Returns the current playback speed. This will be < 0 if the animation is playing backwards.
   */
  public get speed(): number {
    return this.nativeView.getSpeed();
  }

  /**
   * Set the scale on the current composition. The only cost of this function is re-rendering the
   * current frame so you may call it frequent to scale something up or down.
   *
   * The smaller the animation is, the better the performance will be. You may find that scaling an
   * animation down then rendering it in a larger ImageView and letting ImageView scale it back up
   * with a scaleType such as centerInside will yield better performance with little perceivable
   * quality loss.
   */
  public set scale(scale: number) {
    this.nativeView.setScale(scale);
  }

  public get scale(): number {
    return this.nativeView.getScale();
  }

  /**
   * Sets the progress to the specified frame.
   * If the composition isn't set yet, the progress will be set to the frame when
   * it is.
   */
  public set frame(frame: number) {
    this.nativeView.setFrame(frame);
  }

  /**
   * Get the currently rendered frame.
   */
  public get frame() {
    return this.nativeView.getFrame();
  }

  /**
 * Sets the minimum frame that the animation will start from when playing or looping.
 */
  public set minFrame(startFrame: number) {
    this.nativeView.setMinFrame(startFrame);
  }
  /**
   * see setMinFrame(number)
   * and
   * see setMaxFrame(number)
   */
  public setMinAndMaxFrame(minFrame: number, maxFrame: number) {
    this.nativeView.setMinAndMaxFrame(minFrame, maxFrame);
  }

  /**
 * Sets the maximum frame that the animation will end at when playing or looping.
 */
  public set maxFrame(endFrame: number) {
    this.nativeView.setMaxFrame(endFrame);
  }

  public set performanceTrackingEnabled(enabled: boolean) {
    this.nativeView.setPerformanceTrackingEnabled(enabled);
  }

  public get performanceTracker(): any {
    return this.nativeView.getPerformanceTracker();
  }

  /**
   * Reverses the current animation speed. This does NOT play the animation.
   */
  public reverseAnimationSpeed(): void {
    this.nativeView.reverseAnimationSpeed();
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
