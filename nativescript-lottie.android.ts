/**********************************************************************************
 * (c) 2017, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/
'use strict';

import { View } from 'tns-core-modules/ui/core/view';
import { Property } from 'tns-core-modules/ui/core/properties';
import {
	LottieViewBase,
	srcProperty,
	loopProperty,
	autoPlayProperty,
	cacheStrategyProperty
} from './nativescript-lottie.common';

declare var com: any;
declare var android: any;
declare var org: any;

const LottieAnimationView: any = com.airbnb.lottie.LottieAnimationView;

export class LottieView extends LottieViewBase {
	constructor() {
		super();
	}

	/// com.airbnb.lottie.LottieAnimationView
	get android(): any {
		return this.nativeView;
	}

	public createNativeView(): View {
		const nativeView = new LottieAnimationView(this._context);

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
