declare module com {
	export module airbnb {
		export module lottie {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class Cancellable extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.Cancellable>;
				/**
				 * Constructs a new instance of the com.airbnb.lottie.Cancellable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					cancel(): void;
				});
				public constructor();
				public cancel(): void;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class FontAssetDelegate extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.FontAssetDelegate>;
				public getFontPath(param0: string): string;
				public fetchFont(param0: string): globalAndroid.graphics.Typeface;
				public constructor();
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class ImageAssetDelegate extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.ImageAssetDelegate>;
				/**
				 * Constructs a new instance of the com.airbnb.lottie.ImageAssetDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					fetchBitmap(param0: com.airbnb.lottie.LottieImageAsset): globalAndroid.graphics.Bitmap;
				});
				public constructor();
				public fetchBitmap(param0: com.airbnb.lottie.LottieImageAsset): globalAndroid.graphics.Bitmap;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class L extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.L>;
				public static DBG: boolean;
				public static TAG: string;
				public static networkCache(param0: globalAndroid.content.Context): com.airbnb.lottie.network.NetworkCache;
				public static networkFetcher(param0: globalAndroid.content.Context): com.airbnb.lottie.network.NetworkFetcher;
				public static endSection(param0: string): number;
				public static setCacheProvider(param0: com.airbnb.lottie.network.LottieNetworkCacheProvider): void;
				public static setFetcher(param0: com.airbnb.lottie.network.LottieNetworkFetcher): void;
				public static setTraceEnabled(param0: boolean): void;
				public static beginSection(param0: string): void;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class Lottie extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.Lottie>;
				public static initialize(param0: com.airbnb.lottie.LottieConfig): void;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieAnimationView extends androidx.appcompat.widget.AppCompatImageView {
				public static class: java.lang.Class<com.airbnb.lottie.LottieAnimationView>;
				public enableMergePathsForKitKatAndAbove(param0: boolean): void;
				public getMinFrame(): number;
				public updateBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public getMaxFrame(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public sendAccessibilityEvent(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public removeLottieOnCompositionLoadedListener(param0: com.airbnb.lottie.LottieOnCompositionLoadedListener): boolean;
				public getPerformanceTracker(): com.airbnb.lottie.PerformanceTracker;
				public hasMasks(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public removeUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
				public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
				public setFallbackResource(param0: number): void;
				public setOutlineMasksAndMattes(param0: boolean): void;
				public setComposition(param0: com.airbnb.lottie.LottieComposition): void;
				public addAnimatorListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
				public pauseAnimation(): void;
				public getProgress(): number;
				public setRenderMode(param0: com.airbnb.lottie.RenderMode): void;
				public setMinFrame(param0: string): void;
				/** @deprecated */
				public setAnimationFromJson(param0: string): void;
				public getFrame(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public removeAnimatorListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
				public getDuration(): number;
				public setMinFrame(param0: number): void;
				public setMaxProgress(param0: number): void;
				public getImageAssetsFolder(): string;
				public setAnimationFromUrl(param0: string, param1: string): void;
				public setImageAssetsFolder(param0: string): void;
				public cancelAnimation(): void;
				public disableExtraScaleModeInFitXY(): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setFrame(param0: number): void;
				public setMinAndMaxProgress(param0: number, param1: number): void;
				/** @deprecated */
				public loop(param0: boolean): void;
				public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath): java.util.List<com.airbnb.lottie.model.KeyPath>;
				public setScale(param0: number): void;
				public setMinProgress(param0: number): void;
				public setFontAssetDelegate(param0: com.airbnb.lottie.FontAssetDelegate): void;
				public removeAllLottieOnCompositionLoadedListener(): void;
				public addValueCallback(param0: com.airbnb.lottie.model.KeyPath, param1: any, param2: com.airbnb.lottie.value.LottieValueCallback<any>): void;
				public setPerformanceTrackingEnabled(param0: boolean): void;
				public setRepeatCount(param0: number): void;
				public onAttachedToWindow(): void;
				public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
				/** @deprecated */
				public buildDrawingCache(): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setAnimationFromJson(param0: string, param1: string): void;
				public removeAllUpdateListeners(): void;
				/** @deprecated */
				public buildDrawingCache(param0: boolean): void;
				public setImageAssetDelegate(param0: com.airbnb.lottie.ImageAssetDelegate): void;
				public isAnimating(): boolean;
				public setMinAndMaxFrame(param0: string): void;
				public removeAnimatorPauseListener(param0: globalAndroid.animation.Animator.AnimatorPauseListener): void;
				public hasMatte(): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public reverseAnimationSpeed(): void;
				public setAnimationFromUrl(param0: string): void;
				public addLottieOnCompositionLoadedListener(param0: com.airbnb.lottie.LottieOnCompositionLoadedListener): boolean;
				public setAnimation(param0: java.io.InputStream, param1: string): void;
				public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
				public getRepeatCount(): number;
				public isMergePathsEnabledForKitKatAndAbove(): boolean;
				public setFailureListener(param0: com.airbnb.lottie.LottieListener<java.lang.Throwable>): void;
				public getComposition(): com.airbnb.lottie.LottieComposition;
				public setMinAndMaxFrame(param0: number, param1: number): void;
				public setMinAndMaxFrame(param0: string, param1: string, param2: boolean): void;
				public setProgress(param0: number): void;
				public setRepeatMode(param0: number): void;
				public setImageResource(param0: number): void;
				public onDetachedFromWindow(): void;
				public addAnimatorPauseListener(param0: globalAndroid.animation.Animator.AnimatorPauseListener): void;
				public setTextDelegate(param0: com.airbnb.lottie.TextDelegate): void;
				public addValueCallback(param0: com.airbnb.lottie.model.KeyPath, param1: any, param2: com.airbnb.lottie.value.SimpleLottieValueCallback<any>): void;
				public getScale(): number;
				public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setAnimation(param0: number): void;
				public setMaxFrame(param0: string): void;
				public setSafeMode(param0: boolean): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setSpeed(param0: number): void;
				public setAnimation(param0: globalAndroid.view.animation.Animation): void;
				public addAnimatorUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public setAnimation(param0: string): void;
				public setMaxFrame(param0: number): void;
				public getRepeatMode(): number;
				public removeAllAnimatorListeners(): void;
				public setCacheComposition(param0: boolean): void;
				public buildDrawingCache(param0: boolean): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setApplyingOpacityToLayersEnabled(param0: boolean): void;
				public setIgnoreDisabledSystemAnimations(param0: boolean): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getSpeed(): number;
				public playAnimation(): void;
				public resumeAnimation(): void;
			}
			export module LottieAnimationView {
				export class SavedState extends globalAndroid.view.View.BaseSavedState {
					public static class: java.lang.Class<com.airbnb.lottie.LottieAnimationView.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.airbnb.lottie.LottieAnimationView.SavedState>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieComposition extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieComposition>;
				public getDurationFrames(): number;
				public hasDashPattern(): boolean;
				public getDuration(): number;
				public incrementMatteOrMaskCount(param0: number): void;
				public getImages(): java.util.Map<string,com.airbnb.lottie.LottieImageAsset>;
				public constructor();
				public getMarkers(): java.util.List<com.airbnb.lottie.model.Marker>;
				public getBounds(): globalAndroid.graphics.Rect;
				public getPrecomps(param0: string): java.util.List<com.airbnb.lottie.model.layer.Layer>;
				public getWarnings(): java.util.ArrayList<string>;
				public setHasDashPattern(param0: boolean): void;
				public getPerformanceTracker(): com.airbnb.lottie.PerformanceTracker;
				public init(param0: globalAndroid.graphics.Rect, param1: number, param2: number, param3: number, param4: java.util.List<com.airbnb.lottie.model.layer.Layer>, param5: androidx.collection.LongSparseArray<com.airbnb.lottie.model.layer.Layer>, param6: java.util.Map<string,java.util.List<com.airbnb.lottie.model.layer.Layer>>, param7: java.util.Map<string,com.airbnb.lottie.LottieImageAsset>, param8: androidx.collection.SparseArrayCompat<com.airbnb.lottie.model.FontCharacter>, param9: java.util.Map<string,com.airbnb.lottie.model.Font>, param10: java.util.List<com.airbnb.lottie.model.Marker>): void;
				public getStartFrame(): number;
				public getMaskAndMatteCount(): number;
				public getMarker(param0: string): com.airbnb.lottie.model.Marker;
				public getLayers(): java.util.List<com.airbnb.lottie.model.layer.Layer>;
				public getFrameRate(): number;
				public getProgressForFrame(param0: number): number;
				public hasImages(): boolean;
				public toString(): string;
				public getCharacters(): androidx.collection.SparseArrayCompat<com.airbnb.lottie.model.FontCharacter>;
				public getEndFrame(): number;
				public layerModelForId(param0: number): com.airbnb.lottie.model.layer.Layer;
				public getFrameForProgress(param0: number): number;
				public setPerformanceTrackingEnabled(param0: boolean): void;
				public getFonts(): java.util.Map<string,com.airbnb.lottie.model.Font>;
				public addWarning(param0: string): void;
			}
			export module LottieComposition {
				export class Factory extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.LottieComposition.Factory>;
					/** @deprecated */
					public static fromInputStreamSync(param0: java.io.InputStream): com.airbnb.lottie.LottieComposition;
					/** @deprecated */
					public static fromJsonSync(param0: globalAndroid.content.res.Resources, param1: org.json.JSONObject): com.airbnb.lottie.LottieComposition;
					/** @deprecated */
					public static fromInputStreamSync(param0: java.io.InputStream, param1: boolean): com.airbnb.lottie.LottieComposition;
					/** @deprecated */
					public static fromFileSync(param0: globalAndroid.content.Context, param1: string): com.airbnb.lottie.LottieComposition;
					/** @deprecated */
					public static fromJsonString(param0: string, param1: com.airbnb.lottie.OnCompositionLoadedListener): com.airbnb.lottie.Cancellable;
					/** @deprecated */
					public static fromJsonSync(param0: string): com.airbnb.lottie.LottieComposition;
					/** @deprecated */
					public static fromAssetFileName(param0: globalAndroid.content.Context, param1: string, param2: com.airbnb.lottie.OnCompositionLoadedListener): com.airbnb.lottie.Cancellable;
					/** @deprecated */
					public static fromRawFile(param0: globalAndroid.content.Context, param1: number, param2: com.airbnb.lottie.OnCompositionLoadedListener): com.airbnb.lottie.Cancellable;
					/** @deprecated */
					public static fromInputStream(param0: java.io.InputStream, param1: com.airbnb.lottie.OnCompositionLoadedListener): com.airbnb.lottie.Cancellable;
					/** @deprecated */
					public static fromJsonReader(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: com.airbnb.lottie.OnCompositionLoadedListener): com.airbnb.lottie.Cancellable;
					/** @deprecated */
					public static fromJsonSync(param0: com.airbnb.lottie.parser.moshi.JsonReader): com.airbnb.lottie.LottieComposition;
				}
				export module Factory {
					export class ListenerAdapter extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.LottieComposition.Factory.ListenerAdapter>;
						public cancel(): void;
						public onResult(param0: any): void;
						public onResult(param0: com.airbnb.lottie.LottieComposition): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieCompositionFactory extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieCompositionFactory>;
				/** @deprecated */
				public static fromJsonSync(param0: org.json.JSONObject, param1: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				/** @deprecated */
				public static fromJson(param0: org.json.JSONObject, param1: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromRawResSync(param0: globalAndroid.content.Context, param1: number, param2: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static fromJsonStringSync(param0: string, param1: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static fromAssetSync(param0: globalAndroid.content.Context, param1: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static fromRawRes(param0: globalAndroid.content.Context, param1: number): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromJsonReaderSync(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static clearCache(param0: globalAndroid.content.Context): void;
				public static fromAsset(param0: globalAndroid.content.Context, param1: string, param2: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromRawResSync(param0: globalAndroid.content.Context, param1: number): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static fromUrlSync(param0: globalAndroid.content.Context, param1: string, param2: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static fromAsset(param0: globalAndroid.content.Context, param1: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromJsonInputStreamSync(param0: java.io.InputStream, param1: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static fromRawRes(param0: globalAndroid.content.Context, param1: number, param2: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromJsonReader(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromZipStreamSync(param0: java.util.zip.ZipInputStream, param1: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static fromAssetSync(param0: globalAndroid.content.Context, param1: string, param2: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static fromJsonString(param0: string, param1: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromUrlSync(param0: globalAndroid.content.Context, param1: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				public static setMaxCacheSize(param0: number): void;
				public static fromUrl(param0: globalAndroid.content.Context, param1: string, param2: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromZipStream(param0: java.util.zip.ZipInputStream, param1: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromUrl(param0: globalAndroid.content.Context, param1: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
				public static fromJsonInputStream(param0: java.io.InputStream, param1: string): com.airbnb.lottie.LottieTask<com.airbnb.lottie.LottieComposition>;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieConfig extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieConfig>;
			}
			export module LottieConfig {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.LottieConfig.Builder>;
					public setNetworkCacheProvider(param0: com.airbnb.lottie.network.LottieNetworkCacheProvider): com.airbnb.lottie.LottieConfig.Builder;
					public build(): com.airbnb.lottie.LottieConfig;
					public setEnableSystraceMarkers(param0: boolean): com.airbnb.lottie.LottieConfig.Builder;
					public constructor();
					public setNetworkFetcher(param0: com.airbnb.lottie.network.LottieNetworkFetcher): com.airbnb.lottie.LottieConfig.Builder;
					public setNetworkCacheDir(param0: java.io.File): com.airbnb.lottie.LottieConfig.Builder;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieDrawable extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback, globalAndroid.graphics.drawable.Animatable {
				public static class: java.lang.Class<com.airbnb.lottie.LottieDrawable>;
				public static RESTART: number;
				public static REVERSE: number;
				public static INFINITE: number;
				public enableMergePathsForKitKatAndAbove(param0: boolean): void;
				public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public getMinFrame(): number;
				public updateBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public getMaxFrame(): number;
				public getAlpha(): number;
				public clearComposition(): void;
				public removeAllUpdateListeners(): void;
				public constructor();
				public setComposition(param0: com.airbnb.lottie.LottieComposition): boolean;
				public removeAnimatorUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
				public setImageAssetDelegate(param0: com.airbnb.lottie.ImageAssetDelegate): void;
				public isAnimating(): boolean;
				public setMinAndMaxFrame(param0: string): void;
				public removeAnimatorPauseListener(param0: globalAndroid.animation.Animator.AnimatorPauseListener): void;
				public hasMatte(): boolean;
				public isRunning(): boolean;
				public useTextGlyphs(): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public getPerformanceTracker(): com.airbnb.lottie.PerformanceTracker;
				public reverseAnimationSpeed(): void;
				public getImageAsset(param0: string): globalAndroid.graphics.Bitmap;
				public hasMasks(): boolean;
				public getRepeatCount(): number;
				public isMergePathsEnabledForKitKatAndAbove(): boolean;
				public getTextDelegate(): com.airbnb.lottie.TextDelegate;
				public invalidateSelf(): void;
				public setMinAndMaxFrame(param0: number, param1: number): void;
				public getComposition(): com.airbnb.lottie.LottieComposition;
				public setMinAndMaxFrame(param0: string, param1: string, param2: boolean): void;
				/** @deprecated */
				public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public enableMergePathsForKitKatAndAbove(): boolean;
				public setOutlineMasksAndMattes(param0: boolean): void;
				public setProgress(param0: number): void;
				public setRepeatMode(param0: number): void;
				public isLooping(): boolean;
				public getIntrinsicHeight(): number;
				public addAnimatorListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
				public pauseAnimation(): void;
				public getProgress(): number;
				public setMinFrame(param0: string): void;
				public getOpacity(): number;
				public addAnimatorPauseListener(param0: globalAndroid.animation.Animator.AnimatorPauseListener): void;
				public setTextDelegate(param0: com.airbnb.lottie.TextDelegate): void;
				public isApplyingOpacityToLayersEnabled(): boolean;
				public addValueCallback(param0: com.airbnb.lottie.model.KeyPath, param1: any, param2: com.airbnb.lottie.value.SimpleLottieValueCallback<any>): void;
				public getFrame(): number;
				public getScale(): number;
				public removeAnimatorListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public setMinFrame(param0: number): void;
				public setMaxFrame(param0: string): void;
				public getImageAssetsFolder(): string;
				public setMaxProgress(param0: number): void;
				public getIntrinsicWidth(): number;
				public getTypeface(param0: string, param1: string): globalAndroid.graphics.Typeface;
				public setSafeMode(param0: boolean): void;
				public start(): void;
				public cancelAnimation(): void;
				public disableExtraScaleModeInFitXY(): void;
				public setSpeed(param0: number): void;
				public setFrame(param0: number): void;
				/** @deprecated */
				public getOpacity(): number;
				public setMinAndMaxProgress(param0: number, param1: number): void;
				/** @deprecated */
				public loop(param0: boolean): void;
				public addAnimatorUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
				public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath): java.util.List<com.airbnb.lottie.model.KeyPath>;
				public setMaxFrame(param0: number): void;
				public setScale(param0: number): void;
				public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix): void;
				public setAlpha(param0: number): void;
				public setMinProgress(param0: number): void;
				public getRepeatMode(): number;
				public removeAllAnimatorListeners(): void;
				public setFontAssetDelegate(param0: com.airbnb.lottie.FontAssetDelegate): void;
				public setImagesAssetsFolder(param0: string): void;
				public endAnimation(): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public stop(): void;
				public addValueCallback(param0: com.airbnb.lottie.model.KeyPath, param1: any, param2: com.airbnb.lottie.value.LottieValueCallback<any>): void;
				public setPerformanceTrackingEnabled(param0: boolean): void;
				public setApplyingOpacityToLayersEnabled(param0: boolean): void;
				public setIgnoreDisabledSystemAnimations(param0: boolean): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getSpeed(): number;
				public playAnimation(): void;
				public resumeAnimation(): void;
				public setRepeatCount(param0: number): void;
			}
			export module LottieDrawable {
				export class LazyCompositionTask extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.LottieDrawable.LazyCompositionTask>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.LottieDrawable$LazyCompositionTask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						run(param0: com.airbnb.lottie.LottieComposition): void;
					});
					public constructor();
					public run(param0: com.airbnb.lottie.LottieComposition): void;
				}
				export class RepeatMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.airbnb.lottie.LottieDrawable.RepeatMode>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.LottieDrawable$RepeatMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieImageAsset extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieImageAsset>;
				public hasBitmap(): boolean;
				public getWidth(): number;
				public getHeight(): number;
				public getId(): string;
				public getFileName(): string;
				public setBitmap(param0: globalAndroid.graphics.Bitmap): void;
				public constructor(param0: number, param1: number, param2: string, param3: string, param4: string);
				public getDirName(): string;
				public getBitmap(): globalAndroid.graphics.Bitmap;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieListener<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieListener<any>>;
				/**
				 * Constructs a new instance of the com.airbnb.lottie.LottieListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onResult(param0: T): void;
				});
				public constructor();
				public onResult(param0: T): void;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieLogger extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieLogger>;
				/**
				 * Constructs a new instance of the com.airbnb.lottie.LottieLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					debug(param0: string): void;
					debug(param0: string, param1: java.lang.Throwable): void;
					warning(param0: string): void;
					warning(param0: string, param1: java.lang.Throwable): void;
					error(param0: string, param1: java.lang.Throwable): void;
				});
				public constructor();
				public error(param0: string, param1: java.lang.Throwable): void;
				public debug(param0: string): void;
				public warning(param0: string): void;
				public warning(param0: string, param1: java.lang.Throwable): void;
				public debug(param0: string, param1: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieOnCompositionLoadedListener extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieOnCompositionLoadedListener>;
				/**
				 * Constructs a new instance of the com.airbnb.lottie.LottieOnCompositionLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompositionLoaded(param0: com.airbnb.lottie.LottieComposition): void;
				});
				public constructor();
				public onCompositionLoaded(param0: com.airbnb.lottie.LottieComposition): void;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieProperty extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieProperty>;
				/**
				 * Constructs a new instance of the com.airbnb.lottie.LottieProperty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					<clinit>(): void;
				});
				public constructor();
				public static STROKE_COLOR: java.lang.Integer;
				public static TRANSFORM_SCALE: com.airbnb.lottie.value.ScaleXY;
				public static POLYSTAR_POINTS: java.lang.Float;
				public static IMAGE: globalAndroid.graphics.Bitmap;
				public static TRANSFORM_END_OPACITY: java.lang.Float;
				public static RECTANGLE_SIZE: globalAndroid.graphics.PointF;
				public static REPEATER_OFFSET: java.lang.Float;
				public static POLYSTAR_OUTER_ROUNDEDNESS: java.lang.Float;
				public static COLOR_FILTER: globalAndroid.graphics.ColorFilter;
				public static DROP_SHADOW_DISTANCE: java.lang.Float;
				public static DROP_SHADOW_COLOR: java.lang.Integer;
				public static POLYSTAR_OUTER_RADIUS: java.lang.Float;
				public static COLOR: java.lang.Integer;
				public static POLYSTAR_INNER_ROUNDEDNESS: java.lang.Float;
				public static TRANSFORM_ROTATION: java.lang.Float;
				public static POLYSTAR_ROTATION: java.lang.Float;
				public static TRANSFORM_POSITION_X: java.lang.Float;
				public static TRANSFORM_POSITION_Y: java.lang.Float;
				public static GRADIENT_COLOR: androidNative.Array<java.lang.Integer>;
				public static CORNER_RADIUS: java.lang.Float;
				public static DROP_SHADOW_DIRECTION: java.lang.Float;
				public static DROP_SHADOW_OPACITY: java.lang.Float;
				public static OPACITY: java.lang.Integer;
				public static TEXT_SIZE: java.lang.Float;
				public static TEXT_TRACKING: java.lang.Float;
				public static TIME_REMAP: java.lang.Float;
				public static TRANSFORM_SKEW: java.lang.Float;
				public static TRANSFORM_ANCHOR_POINT: globalAndroid.graphics.PointF;
				public static TRANSFORM_OPACITY: java.lang.Integer;
				public static ELLIPSE_SIZE: globalAndroid.graphics.PointF;
				public static STROKE_WIDTH: java.lang.Float;
				public static REPEATER_COPIES: java.lang.Float;
				public static POLYSTAR_INNER_RADIUS: java.lang.Float;
				public static TRANSFORM_SKEW_ANGLE: java.lang.Float;
				public static TYPEFACE: globalAndroid.graphics.Typeface;
				public static BLUR_RADIUS: java.lang.Float;
				public static DROP_SHADOW_RADIUS: java.lang.Float;
				public static POSITION: globalAndroid.graphics.PointF;
				public static TRANSFORM_POSITION: globalAndroid.graphics.PointF;
				public static TRANSFORM_START_OPACITY: java.lang.Float;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieResult<V>  extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieResult<any>>;
				public constructor(param0: V);
				public getValue(): V;
				public getException(): java.lang.Throwable;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class LottieTask<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.LottieTask<any>>;
				public static EXECUTOR: java.util.concurrent.Executor;
				public constructor(param0: java.util.concurrent.Callable<com.airbnb.lottie.LottieResult<T>>);
				public addListener(param0: com.airbnb.lottie.LottieListener<T>): com.airbnb.lottie.LottieTask<T>;
				public removeFailureListener(param0: com.airbnb.lottie.LottieListener<java.lang.Throwable>): com.airbnb.lottie.LottieTask<T>;
				public removeListener(param0: com.airbnb.lottie.LottieListener<T>): com.airbnb.lottie.LottieTask<T>;
				public addFailureListener(param0: com.airbnb.lottie.LottieListener<java.lang.Throwable>): com.airbnb.lottie.LottieTask<T>;
			}
			export module LottieTask {
				export class LottieFutureTask extends java.util.concurrent.FutureTask<com.airbnb.lottie.LottieResult<any>> {
					public static class: java.lang.Class<com.airbnb.lottie.LottieTask.LottieFutureTask>;
					public done(): void;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class OnCompositionLoadedListener extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.OnCompositionLoadedListener>;
				/**
				 * Constructs a new instance of the com.airbnb.lottie.OnCompositionLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompositionLoaded(param0: com.airbnb.lottie.LottieComposition): void;
				});
				public constructor();
				public onCompositionLoaded(param0: com.airbnb.lottie.LottieComposition): void;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class PerformanceTracker extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.PerformanceTracker>;
				public getSortedRenderTimes(): java.util.List<androidx.core.util.Pair<string,java.lang.Float>>;
				public addFrameListener(param0: com.airbnb.lottie.PerformanceTracker.FrameListener): void;
				public logRenderTimes(): void;
				public clearRenderTimes(): void;
				public recordRenderTime(param0: string, param1: number): void;
				public removeFrameListener(param0: com.airbnb.lottie.PerformanceTracker.FrameListener): void;
				public constructor();
			}
			export module PerformanceTracker {
				export class FrameListener extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.PerformanceTracker.FrameListener>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.PerformanceTracker$FrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFrameRendered(param0: number): void;
					});
					public constructor();
					public onFrameRendered(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class RenderMode {
				public static class: java.lang.Class<com.airbnb.lottie.RenderMode>;
				public static AUTOMATIC: com.airbnb.lottie.RenderMode;
				public static HARDWARE: com.airbnb.lottie.RenderMode;
				public static SOFTWARE: com.airbnb.lottie.RenderMode;
				public static values(): androidNative.Array<com.airbnb.lottie.RenderMode>;
				public static valueOf(param0: string): com.airbnb.lottie.RenderMode;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class SimpleColorFilter extends globalAndroid.graphics.PorterDuffColorFilter {
				public static class: java.lang.Class<com.airbnb.lottie.SimpleColorFilter>;
				/** @deprecated */
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode);
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export class TextDelegate extends java.lang.Object {
				public static class: java.lang.Class<com.airbnb.lottie.TextDelegate>;
				public setText(param0: string, param1: string): void;
				public invalidateAllText(): void;
				public setCacheText(param0: boolean): void;
				public invalidateText(param0: string): void;
				public getText(param0: string): string;
				public getTextInternal(param0: string): string;
				public constructor(param0: com.airbnb.lottie.LottieAnimationView);
				public constructor(param0: com.airbnb.lottie.LottieDrawable);
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export class LPaint extends globalAndroid.graphics.Paint {
					public static class: java.lang.Class<com.airbnb.lottie.animation.LPaint>;
					public constructor(param0: globalAndroid.graphics.Paint);
					public constructor();
					public constructor(param0: globalAndroid.graphics.PorterDuff.Mode);
					public constructor(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode);
					public constructor(param0: number);
					public setTextLocales(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export abstract class BaseStrokeContent extends java.lang.Object implements com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.animation.content.KeyPathElementContent, com.airbnb.lottie.animation.content.DrawingContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.BaseStrokeContent>;
						public layer: com.airbnb.lottie.model.layer.BaseLayer;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public getName(): string;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
					export module BaseStrokeContent {
						export class PathGroup extends java.lang.Object {
							public static class: java.lang.Class<com.airbnb.lottie.animation.content.BaseStrokeContent.PathGroup>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class CompoundTrimPathContent extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.CompoundTrimPathContent>;
						public constructor();
						public apply(param0: globalAndroid.graphics.Path): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class Content extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.Content>;
						/**
						 * Constructs a new instance of the com.airbnb.lottie.animation.content.Content interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						});
						public constructor();
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class ContentGroup extends java.lang.Object implements com.airbnb.lottie.animation.content.DrawingContent, com.airbnb.lottie.animation.content.PathContent, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.model.KeyPathElement {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.ContentGroup>;
						public onValueChanged(): void;
						public getPath(): globalAndroid.graphics.Path;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.ShapeGroup);
						public getName(): string;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class DrawingContent extends java.lang.Object implements com.airbnb.lottie.animation.content.Content {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.DrawingContent>;
						/**
						 * Constructs a new instance of the com.airbnb.lottie.animation.content.DrawingContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
							getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
							getName(): string;
							setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						});
						public constructor();
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public getName(): string;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class EllipseContent extends java.lang.Object implements com.airbnb.lottie.animation.content.PathContent, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.animation.content.KeyPathElementContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.EllipseContent>;
						public onValueChanged(): void;
						public getPath(): globalAndroid.graphics.Path;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.CircleShape);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class FillContent extends java.lang.Object implements com.airbnb.lottie.animation.content.DrawingContent, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.animation.content.KeyPathElementContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.FillContent>;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.ShapeFill);
						public getName(): string;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class GradientFillContent extends java.lang.Object implements com.airbnb.lottie.animation.content.DrawingContent, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.animation.content.KeyPathElementContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.GradientFillContent>;
						public onValueChanged(): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.GradientFill);
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public getName(): string;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class GradientStrokeContent extends com.airbnb.lottie.animation.content.BaseStrokeContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.GradientStrokeContent>;
						public onValueChanged(): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.GradientStroke);
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public getName(): string;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class GreedyContent extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.GreedyContent>;
						/**
						 * Constructs a new instance of the com.airbnb.lottie.animation.content.GreedyContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							absorbContent(param0: java.util.ListIterator<com.airbnb.lottie.animation.content.Content>): void;
						});
						public constructor();
						public absorbContent(param0: java.util.ListIterator<com.airbnb.lottie.animation.content.Content>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class KeyPathElementContent extends java.lang.Object implements com.airbnb.lottie.model.KeyPathElement, com.airbnb.lottie.animation.content.Content {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.KeyPathElementContent>;
						/**
						 * Constructs a new instance of the com.airbnb.lottie.animation.content.KeyPathElementContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
							addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
							getName(): string;
							setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						});
						public constructor();
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class MergePathsContent extends java.lang.Object implements com.airbnb.lottie.animation.content.PathContent, com.airbnb.lottie.animation.content.GreedyContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.MergePathsContent>;
						public getPath(): globalAndroid.graphics.Path;
						public absorbContent(param0: java.util.ListIterator<com.airbnb.lottie.animation.content.Content>): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public constructor(param0: com.airbnb.lottie.model.content.MergePaths);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class ModifierContent extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.ModifierContent>;
						/**
						 * Constructs a new instance of the com.airbnb.lottie.animation.content.ModifierContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class PathContent extends java.lang.Object implements com.airbnb.lottie.animation.content.Content {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.PathContent>;
						/**
						 * Constructs a new instance of the com.airbnb.lottie.animation.content.PathContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getPath(): globalAndroid.graphics.Path;
							getName(): string;
							setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						});
						public constructor();
						public getPath(): globalAndroid.graphics.Path;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class PolystarContent extends java.lang.Object implements com.airbnb.lottie.animation.content.PathContent, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.animation.content.KeyPathElementContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.PolystarContent>;
						public onValueChanged(): void;
						public getPath(): globalAndroid.graphics.Path;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public getName(): string;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.PolystarShape);
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class RectangleContent extends java.lang.Object implements com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.animation.content.KeyPathElementContent, com.airbnb.lottie.animation.content.PathContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.RectangleContent>;
						public onValueChanged(): void;
						public getPath(): globalAndroid.graphics.Path;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.RectangleShape);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class RepeaterContent extends java.lang.Object implements com.airbnb.lottie.animation.content.DrawingContent, com.airbnb.lottie.animation.content.PathContent, com.airbnb.lottie.animation.content.GreedyContent, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.animation.content.KeyPathElementContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.RepeaterContent>;
						public getPath(): globalAndroid.graphics.Path;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public absorbContent(param0: java.util.ListIterator<com.airbnb.lottie.animation.content.Content>): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.Repeater);
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public getName(): string;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class ShapeContent extends java.lang.Object implements com.airbnb.lottie.animation.content.PathContent, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.ShapeContent>;
						public onValueChanged(): void;
						public getPath(): globalAndroid.graphics.Path;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.ShapePath);
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class StrokeContent extends com.airbnb.lottie.animation.content.BaseStrokeContent {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.StrokeContent>;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.model.content.ShapeStroke);
						public getName(): string;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module content {
					export class TrimPathContent extends java.lang.Object implements com.airbnb.lottie.animation.content.Content, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener {
						public static class: java.lang.Class<com.airbnb.lottie.animation.content.TrimPathContent>;
						public onValueChanged(): void;
						public constructor(param0: com.airbnb.lottie.model.layer.BaseLayer, param1: com.airbnb.lottie.model.content.ShapeTrimPath);
						public isHidden(): boolean;
						public getOffset(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,java.lang.Float>;
						public getStart(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,java.lang.Float>;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public getName(): string;
						public getEnd(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,java.lang.Float>;
					}
				}
			}
		}
	}
}


declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export abstract class BaseKeyframeAnimation<K, A>  extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>>;
						public progress: number;
						public valueCallback: com.airbnb.lottie.value.LottieValueCallback<A>;
						public setProgress(param0: number): void;
						public getCurrentKeyframe(): com.airbnb.lottie.value.Keyframe<K>;
						public getValue(param0: com.airbnb.lottie.value.Keyframe<K>, param1: number, param2: number, param3: number): A;
						public setIsDiscrete(): void;
						public addUpdateListener(param0: com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener): void;
						public notifyListeners(): void;
						public getValue(): A;
						public getProgress(): number;
						public setValueCallback(param0: com.airbnb.lottie.value.LottieValueCallback<A>): void;
						public getInterpolatedCurrentKeyframeProgress(): number;
					}
					export module BaseKeyframeAnimation {
						export class AnimationListener extends java.lang.Object {
							public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener>;
							/**
							 * Constructs a new instance of the com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation$AnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onValueChanged(): void;
							});
							public constructor();
							public onValueChanged(): void;
						}
						export class EmptyKeyframeWrapper<T>  extends com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.KeyframesWrapper<any> {
							public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.EmptyKeyframeWrapper<any>>;
							public getCurrentKeyframe(): com.airbnb.lottie.value.Keyframe<any>;
							public isCachedValueEnabled(param0: number): boolean;
							public getStartDelayProgress(): number;
							public isValueChanged(param0: number): boolean;
							public isEmpty(): boolean;
							public getEndProgress(): number;
						}
						export class KeyframesWrapper<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.KeyframesWrapper<any>>;
							/**
							 * Constructs a new instance of the com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation$KeyframesWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isEmpty(): boolean;
								isValueChanged(param0: number): boolean;
								getCurrentKeyframe(): com.airbnb.lottie.value.Keyframe<T>;
								getStartDelayProgress(): number;
								getEndProgress(): number;
								isCachedValueEnabled(param0: number): boolean;
							});
							public constructor();
							public getCurrentKeyframe(): com.airbnb.lottie.value.Keyframe<T>;
							public isCachedValueEnabled(param0: number): boolean;
							public getStartDelayProgress(): number;
							public isValueChanged(param0: number): boolean;
							public isEmpty(): boolean;
							public getEndProgress(): number;
						}
						export class KeyframesWrapperImpl<T>  extends com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.KeyframesWrapper<any> {
							public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.KeyframesWrapperImpl<any>>;
							public getCurrentKeyframe(): com.airbnb.lottie.value.Keyframe<any>;
							public isCachedValueEnabled(param0: number): boolean;
							public getStartDelayProgress(): number;
							public isValueChanged(param0: number): boolean;
							public isEmpty(): boolean;
							public getEndProgress(): number;
						}
						export class SingleKeyframeWrapper<T>  extends com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.KeyframesWrapper<any> {
							public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.SingleKeyframeWrapper<any>>;
							public getCurrentKeyframe(): com.airbnb.lottie.value.Keyframe<any>;
							public isCachedValueEnabled(param0: number): boolean;
							public getStartDelayProgress(): number;
							public isValueChanged(param0: number): boolean;
							public isEmpty(): boolean;
							public getEndProgress(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class ColorKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.KeyframeAnimation<java.lang.Integer> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.ColorKeyframeAnimation>;
						public getIntValue(param0: com.airbnb.lottie.value.Keyframe<java.lang.Integer>, param1: number): number;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<java.lang.Integer>>);
						public getIntValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class DropShadowKeyframeAnimation extends java.lang.Object implements com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.DropShadowKeyframeAnimation>;
						public onValueChanged(): void;
						public setDistanceCallback(param0: com.airbnb.lottie.value.LottieValueCallback<java.lang.Float>): void;
						public setColorCallback(param0: com.airbnb.lottie.value.LottieValueCallback<java.lang.Integer>): void;
						public setDirectionCallback(param0: com.airbnb.lottie.value.LottieValueCallback<java.lang.Float>): void;
						public constructor(param0: com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, param1: com.airbnb.lottie.model.layer.BaseLayer, param2: com.airbnb.lottie.parser.DropShadowEffect);
						public setOpacityCallback(param0: com.airbnb.lottie.value.LottieValueCallback<java.lang.Float>): void;
						public setRadiusCallback(param0: com.airbnb.lottie.value.LottieValueCallback<java.lang.Float>): void;
						public applyTo(param0: globalAndroid.graphics.Paint): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class FloatKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.KeyframeAnimation<java.lang.Float> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.FloatKeyframeAnimation>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<java.lang.Float>>);
						public getFloatValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class GradientColorKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.KeyframeAnimation<com.airbnb.lottie.model.content.GradientColor> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.GradientColorKeyframeAnimation>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.model.content.GradientColor>>);
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class IntegerKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.KeyframeAnimation<java.lang.Integer> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.IntegerKeyframeAnimation>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<java.lang.Integer>>);
						public getIntValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export abstract class KeyframeAnimation<T>  extends com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.KeyframeAnimation<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class MaskKeyframeAnimation extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.MaskKeyframeAnimation>;
						public getOpacityAnimations(): java.util.List<com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<java.lang.Integer,java.lang.Integer>>;
						public getMaskAnimations(): java.util.List<com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<com.airbnb.lottie.model.content.ShapeData,globalAndroid.graphics.Path>>;
						public constructor(param0: java.util.List<com.airbnb.lottie.model.content.Mask>);
						public getMasks(): java.util.List<com.airbnb.lottie.model.content.Mask>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class PathKeyframe extends com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.PathKeyframe>;
						public constructor(param0: com.airbnb.lottie.LottieComposition, param1: any, param2: any, param3: globalAndroid.view.animation.Interpolator, param4: number, param5: java.lang.Float);
						public constructor(param0: com.airbnb.lottie.LottieComposition, param1: com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>);
						public constructor(param0: com.airbnb.lottie.LottieComposition, param1: any, param2: any, param3: globalAndroid.view.animation.Interpolator, param4: globalAndroid.view.animation.Interpolator, param5: globalAndroid.view.animation.Interpolator, param6: number, param7: java.lang.Float);
						public createPath(): void;
						public constructor(param0: com.airbnb.lottie.LottieComposition, param1: any, param2: any, param3: globalAndroid.view.animation.Interpolator, param4: globalAndroid.view.animation.Interpolator, param5: number, param6: java.lang.Float);
						public constructor(param0: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class PathKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.KeyframeAnimation<globalAndroid.graphics.PointF> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.PathKeyframeAnimation>;
						public constructor(param0: java.util.List<any>);
						public getValue(): any;
						public getValue(param0: com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>, param1: number): globalAndroid.graphics.PointF;
						public getValue(param0: com.airbnb.lottie.value.Keyframe<any>, param1: number, param2: number, param3: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class PointKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.KeyframeAnimation<globalAndroid.graphics.PointF> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.PointKeyframeAnimation>;
						public getValue(): any;
						public getValue(param0: com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>, param1: number): globalAndroid.graphics.PointF;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>>);
						public getValue(param0: com.airbnb.lottie.value.Keyframe<any>, param1: number, param2: number, param3: number): any;
						public getValue(param0: com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>, param1: number, param2: number, param3: number): globalAndroid.graphics.PointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class ScaleKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.KeyframeAnimation<com.airbnb.lottie.value.ScaleXY> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.ScaleKeyframeAnimation>;
						public getValue(): any;
						public getValue(param0: com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.value.ScaleXY>, param1: number): com.airbnb.lottie.value.ScaleXY;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.value.ScaleXY>>);
						public getValue(param0: com.airbnb.lottie.value.Keyframe<any>, param1: number, param2: number, param3: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class ShapeKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<com.airbnb.lottie.model.content.ShapeData,globalAndroid.graphics.Path> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.ShapeKeyframeAnimation>;
						public getValue(param0: com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.model.content.ShapeData>, param1: number): globalAndroid.graphics.Path;
						public getValue(): any;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.model.content.ShapeData>>);
						public getValue(param0: com.airbnb.lottie.value.Keyframe<any>, param1: number, param2: number, param3: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class SplitDimensionPathKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.SplitDimensionPathKeyframeAnimation>;
						public xValueCallback: com.airbnb.lottie.value.LottieValueCallback<java.lang.Float>;
						public yValueCallback: com.airbnb.lottie.value.LottieValueCallback<java.lang.Float>;
						public setProgress(param0: number): void;
						public getValue(): globalAndroid.graphics.PointF;
						public getValue(): any;
						public setYValueCallback(param0: com.airbnb.lottie.value.LottieValueCallback<java.lang.Float>): void;
						public constructor(param0: com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<java.lang.Float,java.lang.Float>, param1: com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<java.lang.Float,java.lang.Float>);
						public setXValueCallback(param0: com.airbnb.lottie.value.LottieValueCallback<java.lang.Float>): void;
						public getValue(param0: com.airbnb.lottie.value.Keyframe<any>, param1: number, param2: number, param3: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class TextKeyframeAnimation extends com.airbnb.lottie.animation.keyframe.KeyframeAnimation<com.airbnb.lottie.model.DocumentData> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.TextKeyframeAnimation>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.model.DocumentData>>);
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class TransformKeyframeAnimation extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.TransformKeyframeAnimation>;
						public setProgress(param0: number): void;
						public getEndOpacity(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,java.lang.Float>;
						public constructor(param0: com.airbnb.lottie.model.animatable.AnimatableTransform);
						public applyValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): boolean;
						public getMatrix(): globalAndroid.graphics.Matrix;
						public addAnimationsToLayer(param0: com.airbnb.lottie.model.layer.BaseLayer): void;
						public getOpacity(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,java.lang.Integer>;
						public getMatrixForRepeater(param0: number): globalAndroid.graphics.Matrix;
						public addListener(param0: com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener): void;
						public getStartOpacity(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,java.lang.Float>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module animation {
				export module keyframe {
					export class ValueCallbackKeyframeAnimation<K, A>  extends com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any> {
						public static class: java.lang.Class<com.airbnb.lottie.animation.keyframe.ValueCallbackKeyframeAnimation<any,any>>;
						public setProgress(param0: number): void;
						public constructor(param0: com.airbnb.lottie.value.LottieValueCallback<any>, param1: any);
						public notifyListeners(): void;
						public getValue(): any;
						public constructor(param0: com.airbnb.lottie.value.LottieValueCallback<any>);
						public getValue(param0: com.airbnb.lottie.value.Keyframe<any>, param1: number, param2: number, param3: number): any;
					}
				}
			}
		}
	}
}



declare module com {
	export module airbnb {
		export module lottie {
			export module manager {
				export class FontAssetManager extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.manager.FontAssetManager>;
					public setDelegate(param0: com.airbnb.lottie.FontAssetDelegate): void;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable.Callback, param1: com.airbnb.lottie.FontAssetDelegate);
					public setDefaultFontFileExtension(param0: string): void;
					public getTypeface(param0: string, param1: string): globalAndroid.graphics.Typeface;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module manager {
				export class ImageAssetManager extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.manager.ImageAssetManager>;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable.Callback, param1: string, param2: com.airbnb.lottie.ImageAssetDelegate, param3: java.util.Map<string,com.airbnb.lottie.LottieImageAsset>);
					public updateBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					public setDelegate(param0: com.airbnb.lottie.ImageAssetDelegate): void;
					public hasSameContext(param0: globalAndroid.content.Context): boolean;
					public bitmapForId(param0: string): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}


declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class CubicCurveData extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.CubicCurveData>;
					public setControlPoint1(param0: number, param1: number): void;
					public getVertex(): globalAndroid.graphics.PointF;
					public setControlPoint2(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF);
					public setVertex(param0: number, param1: number): void;
					public constructor();
					public getControlPoint2(): globalAndroid.graphics.PointF;
					public getControlPoint1(): globalAndroid.graphics.PointF;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class DocumentData extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.DocumentData>;
					public text: string;
					public fontName: string;
					public size: number;
					public justification: com.airbnb.lottie.model.DocumentData.Justification;
					public tracking: number;
					public lineHeight: number;
					public baselineShift: number;
					public color: number;
					public strokeColor: number;
					public strokeWidth: number;
					public strokeOverFill: boolean;
					public constructor(param0: string, param1: string, param2: number, param3: com.airbnb.lottie.model.DocumentData.Justification, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: boolean);
					public hashCode(): number;
				}
				export module DocumentData {
					export class Justification {
						public static class: java.lang.Class<com.airbnb.lottie.model.DocumentData.Justification>;
						public static LEFT_ALIGN: com.airbnb.lottie.model.DocumentData.Justification;
						public static RIGHT_ALIGN: com.airbnb.lottie.model.DocumentData.Justification;
						public static CENTER: com.airbnb.lottie.model.DocumentData.Justification;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.airbnb.lottie.model.DocumentData.Justification;
						public static values(): androidNative.Array<com.airbnb.lottie.model.DocumentData.Justification>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class Font extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.Font>;
					public getName(): string;
					public setTypeface(param0: globalAndroid.graphics.Typeface): void;
					public getFamily(): string;
					public constructor(param0: string, param1: string, param2: string, param3: number);
					public getStyle(): string;
					public getTypeface(): globalAndroid.graphics.Typeface;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class FontCharacter extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.FontCharacter>;
					public getShapes(): java.util.List<com.airbnb.lottie.model.content.ShapeGroup>;
					public static hashFor(param0: string, param1: string, param2: string): number;
					public getWidth(): number;
					public constructor(param0: java.util.List<com.airbnb.lottie.model.content.ShapeGroup>, param1: string, param2: number, param3: number, param4: string, param5: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class KeyPath extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.KeyPath>;
					public static COMPOSITION: com.airbnb.lottie.model.KeyPath;
					public fullyResolvesTo(param0: string, param1: number): boolean;
					public incrementDepthBy(param0: string, param1: number): number;
					public matches(param0: string, param1: number): boolean;
					public propagateToChildren(param0: string, param1: number): boolean;
					public toString(): string;
					public constructor(param0: androidNative.Array<string>);
					public resolve(param0: com.airbnb.lottie.model.KeyPathElement): com.airbnb.lottie.model.KeyPath;
					public getResolvedElement(): com.airbnb.lottie.model.KeyPathElement;
					public addKey(param0: string): com.airbnb.lottie.model.KeyPath;
					public keysToString(): string;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class KeyPathElement extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.KeyPathElement>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.model.KeyPathElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
					});
					public constructor();
					public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
					public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class LottieCompositionCache extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.LottieCompositionCache>;
					public clear(): void;
					public put(param0: string, param1: com.airbnb.lottie.LottieComposition): void;
					public resize(param0: number): void;
					public get(param0: string): com.airbnb.lottie.LottieComposition;
					public static getInstance(): com.airbnb.lottie.model.LottieCompositionCache;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class Marker extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.Marker>;
					public startFrame: number;
					public durationFrames: number;
					public matchesName(param0: string): boolean;
					public constructor(param0: string, param1: number, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export class MutablePair<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.model.MutablePair<any>>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public set(param0: T, param1: T): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableColorValue extends com.airbnb.lottie.model.animatable.BaseAnimatableValue<java.lang.Integer,java.lang.Integer> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableColorValue>;
						public isStatic(): boolean;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<java.lang.Integer,java.lang.Integer>;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<java.lang.Integer>>);
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableFloatValue extends com.airbnb.lottie.model.animatable.BaseAnimatableValue<java.lang.Float,java.lang.Float> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableFloatValue>;
						public isStatic(): boolean;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<java.lang.Float,java.lang.Float>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<java.lang.Float>>);
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableGradientColorValue extends com.airbnb.lottie.model.animatable.BaseAnimatableValue<com.airbnb.lottie.model.content.GradientColor,com.airbnb.lottie.model.content.GradientColor> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableGradientColorValue>;
						public isStatic(): boolean;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.model.content.GradientColor>>);
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<com.airbnb.lottie.model.content.GradientColor,com.airbnb.lottie.model.content.GradientColor>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableIntegerValue extends com.airbnb.lottie.model.animatable.BaseAnimatableValue<java.lang.Integer,java.lang.Integer> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableIntegerValue>;
						public isStatic(): boolean;
						public constructor();
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<java.lang.Integer,java.lang.Integer>;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<java.lang.Integer>>);
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatablePathValue extends com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatablePathValue>;
						public isStatic(): boolean;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>;
						public constructor();
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>>;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>>);
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatablePointValue extends com.airbnb.lottie.model.animatable.BaseAnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatablePointValue>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>;
						public isStatic(): boolean;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>>);
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableScaleValue extends com.airbnb.lottie.model.animatable.BaseAnimatableValue<com.airbnb.lottie.value.ScaleXY,com.airbnb.lottie.value.ScaleXY> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableScaleValue>;
						public isStatic(): boolean;
						public constructor(param0: com.airbnb.lottie.value.ScaleXY);
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.value.ScaleXY>>);
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<com.airbnb.lottie.value.ScaleXY,com.airbnb.lottie.value.ScaleXY>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableShapeValue extends com.airbnb.lottie.model.animatable.BaseAnimatableValue<com.airbnb.lottie.model.content.ShapeData,globalAndroid.graphics.Path> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableShapeValue>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<com.airbnb.lottie.model.content.ShapeData,globalAndroid.graphics.Path>;
						public isStatic(): boolean;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.model.content.ShapeData>>);
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableSplitDimensionPathValue extends com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableSplitDimensionPathValue>;
						public isStatic(): boolean;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>;
						public constructor(param0: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param1: com.airbnb.lottie.model.animatable.AnimatableFloatValue);
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<globalAndroid.graphics.PointF>>;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableTextFrame extends com.airbnb.lottie.model.animatable.BaseAnimatableValue<com.airbnb.lottie.model.DocumentData,com.airbnb.lottie.model.DocumentData> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableTextFrame>;
						public isStatic(): boolean;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.TextKeyframeAnimation;
						public constructor(param0: java.util.List<com.airbnb.lottie.value.Keyframe<com.airbnb.lottie.model.DocumentData>>);
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableTextProperties extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableTextProperties>;
						public color: com.airbnb.lottie.model.animatable.AnimatableColorValue;
						public stroke: com.airbnb.lottie.model.animatable.AnimatableColorValue;
						public strokeWidth: com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public tracking: com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public constructor(param0: com.airbnb.lottie.model.animatable.AnimatableColorValue, param1: com.airbnb.lottie.model.animatable.AnimatableColorValue, param2: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param3: com.airbnb.lottie.model.animatable.AnimatableFloatValue);
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableTransform extends java.lang.Object implements com.airbnb.lottie.animation.content.ModifierContent, com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableTransform>;
						public getStartOpacity(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public constructor();
						public constructor(param0: com.airbnb.lottie.model.animatable.AnimatablePathValue, param1: com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>, param2: com.airbnb.lottie.model.animatable.AnimatableScaleValue, param3: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param4: com.airbnb.lottie.model.animatable.AnimatableIntegerValue, param5: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param6: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param7: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param8: com.airbnb.lottie.model.animatable.AnimatableFloatValue);
						public getPosition(): com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>;
						public getEndOpacity(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getSkewAngle(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public getRotation(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getOpacity(): com.airbnb.lottie.model.animatable.AnimatableIntegerValue;
						public getAnchorPoint(): com.airbnb.lottie.model.animatable.AnimatablePathValue;
						public getSkew(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getScale(): com.airbnb.lottie.model.animatable.AnimatableScaleValue;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.TransformKeyframeAnimation;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export class AnimatableValue<K, A>  extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.AnimatableValue<any,any>>;
						/**
						 * Constructs a new instance of the com.airbnb.lottie.model.animatable.AnimatableValue<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<K>>;
							isStatic(): boolean;
							createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<K,A>;
						});
						public constructor();
						public isStatic(): boolean;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<K>>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<K,A>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module animatable {
					export abstract class BaseAnimatableValue<V, O>  extends com.airbnb.lottie.model.animatable.AnimatableValue<any,any> {
						public static class: java.lang.Class<com.airbnb.lottie.model.animatable.BaseAnimatableValue<any,any>>;
						public isStatic(): boolean;
						public getKeyframes(): java.util.List<com.airbnb.lottie.value.Keyframe<any>>;
						public createAnimation(): com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>;
						public toString(): string;
					}
				}
			}
		}
	}
}


declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class BlurEffect extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.BlurEffect>;
						public getBlurriness(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public constructor(param0: com.airbnb.lottie.model.animatable.AnimatableFloatValue);
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class CircleShape extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.CircleShape>;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public getSize(): com.airbnb.lottie.model.animatable.AnimatablePointValue;
						public isHidden(): boolean;
						public constructor(param0: string, param1: com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>, param2: com.airbnb.lottie.model.animatable.AnimatablePointValue, param3: boolean, param4: boolean);
						public getName(): string;
						public getPosition(): com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>;
						public isReversed(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class ContentModel extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.ContentModel>;
						/**
						 * Constructs a new instance of the com.airbnb.lottie.model.content.ContentModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						});
						public constructor();
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class GradientColor extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.GradientColor>;
						public constructor(param0: androidNative.Array<number>, param1: androidNative.Array<number>);
						public getColors(): androidNative.Array<number>;
						public getSize(): number;
						public getPositions(): androidNative.Array<number>;
						public lerp(param0: com.airbnb.lottie.model.content.GradientColor, param1: com.airbnb.lottie.model.content.GradientColor, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class GradientFill extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.GradientFill>;
						public getGradientType(): com.airbnb.lottie.model.content.GradientType;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public constructor(param0: string, param1: com.airbnb.lottie.model.content.GradientType, param2: globalAndroid.graphics.Path.FillType, param3: com.airbnb.lottie.model.animatable.AnimatableGradientColorValue, param4: com.airbnb.lottie.model.animatable.AnimatableIntegerValue, param5: com.airbnb.lottie.model.animatable.AnimatablePointValue, param6: com.airbnb.lottie.model.animatable.AnimatablePointValue, param7: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param8: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param9: boolean);
						public getGradientColor(): com.airbnb.lottie.model.animatable.AnimatableGradientColorValue;
						public isHidden(): boolean;
						public getOpacity(): com.airbnb.lottie.model.animatable.AnimatableIntegerValue;
						public getStartPoint(): com.airbnb.lottie.model.animatable.AnimatablePointValue;
						public getEndPoint(): com.airbnb.lottie.model.animatable.AnimatablePointValue;
						public getFillType(): globalAndroid.graphics.Path.FillType;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class GradientStroke extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.GradientStroke>;
						public getLineDashPattern(): java.util.List<com.airbnb.lottie.model.animatable.AnimatableFloatValue>;
						public getGradientType(): com.airbnb.lottie.model.content.GradientType;
						public getMiterLimit(): number;
						public getCapType(): com.airbnb.lottie.model.content.ShapeStroke.LineCapType;
						public getGradientColor(): com.airbnb.lottie.model.animatable.AnimatableGradientColorValue;
						public getEndPoint(): com.airbnb.lottie.model.animatable.AnimatablePointValue;
						public getJoinType(): com.airbnb.lottie.model.content.ShapeStroke.LineJoinType;
						public getName(): string;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public getWidth(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public constructor(param0: string, param1: com.airbnb.lottie.model.content.GradientType, param2: com.airbnb.lottie.model.animatable.AnimatableGradientColorValue, param3: com.airbnb.lottie.model.animatable.AnimatableIntegerValue, param4: com.airbnb.lottie.model.animatable.AnimatablePointValue, param5: com.airbnb.lottie.model.animatable.AnimatablePointValue, param6: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param7: com.airbnb.lottie.model.content.ShapeStroke.LineCapType, param8: com.airbnb.lottie.model.content.ShapeStroke.LineJoinType, param9: number, param10: java.util.List<com.airbnb.lottie.model.animatable.AnimatableFloatValue>, param11: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param12: boolean);
						public isHidden(): boolean;
						public getOpacity(): com.airbnb.lottie.model.animatable.AnimatableIntegerValue;
						public getStartPoint(): com.airbnb.lottie.model.animatable.AnimatablePointValue;
						public getDashOffset(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class GradientType {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.GradientType>;
						public static LINEAR: com.airbnb.lottie.model.content.GradientType;
						public static RADIAL: com.airbnb.lottie.model.content.GradientType;
						public static valueOf(param0: string): com.airbnb.lottie.model.content.GradientType;
						public static values(): androidNative.Array<com.airbnb.lottie.model.content.GradientType>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class Mask extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.Mask>;
						public getOpacity(): com.airbnb.lottie.model.animatable.AnimatableIntegerValue;
						public constructor(param0: com.airbnb.lottie.model.content.Mask.MaskMode, param1: com.airbnb.lottie.model.animatable.AnimatableShapeValue, param2: com.airbnb.lottie.model.animatable.AnimatableIntegerValue, param3: boolean);
						public isInverted(): boolean;
						public getMaskMode(): com.airbnb.lottie.model.content.Mask.MaskMode;
						public getMaskPath(): com.airbnb.lottie.model.animatable.AnimatableShapeValue;
					}
					export module Mask {
						export class MaskMode {
							public static class: java.lang.Class<com.airbnb.lottie.model.content.Mask.MaskMode>;
							public static MASK_MODE_ADD: com.airbnb.lottie.model.content.Mask.MaskMode;
							public static MASK_MODE_SUBTRACT: com.airbnb.lottie.model.content.Mask.MaskMode;
							public static MASK_MODE_INTERSECT: com.airbnb.lottie.model.content.Mask.MaskMode;
							public static MASK_MODE_NONE: com.airbnb.lottie.model.content.Mask.MaskMode;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): androidNative.Array<com.airbnb.lottie.model.content.Mask.MaskMode>;
							public static valueOf(param0: string): com.airbnb.lottie.model.content.Mask.MaskMode;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class MergePaths extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.MergePaths>;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public constructor(param0: string, param1: com.airbnb.lottie.model.content.MergePaths.MergePathsMode, param2: boolean);
						public isHidden(): boolean;
						public getMode(): com.airbnb.lottie.model.content.MergePaths.MergePathsMode;
						public getName(): string;
						public toString(): string;
					}
					export module MergePaths {
						export class MergePathsMode {
							public static class: java.lang.Class<com.airbnb.lottie.model.content.MergePaths.MergePathsMode>;
							public static MERGE: com.airbnb.lottie.model.content.MergePaths.MergePathsMode;
							public static ADD: com.airbnb.lottie.model.content.MergePaths.MergePathsMode;
							public static SUBTRACT: com.airbnb.lottie.model.content.MergePaths.MergePathsMode;
							public static INTERSECT: com.airbnb.lottie.model.content.MergePaths.MergePathsMode;
							public static EXCLUDE_INTERSECTIONS: com.airbnb.lottie.model.content.MergePaths.MergePathsMode;
							public static values(): androidNative.Array<com.airbnb.lottie.model.content.MergePaths.MergePathsMode>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.airbnb.lottie.model.content.MergePaths.MergePathsMode;
							public static forId(param0: number): com.airbnb.lottie.model.content.MergePaths.MergePathsMode;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class PolystarShape extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.PolystarShape>;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public getRotation(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getOuterRoundedness(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public isHidden(): boolean;
						public getType(): com.airbnb.lottie.model.content.PolystarShape.Type;
						public getPoints(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getInnerRadius(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getInnerRoundedness(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getName(): string;
						public getPosition(): com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>;
						public getOuterRadius(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public constructor(param0: string, param1: com.airbnb.lottie.model.content.PolystarShape.Type, param2: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param3: com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>, param4: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param5: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param6: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param7: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param8: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param9: boolean);
					}
					export module PolystarShape {
						export class Type {
							public static class: java.lang.Class<com.airbnb.lottie.model.content.PolystarShape.Type>;
							public static STAR: com.airbnb.lottie.model.content.PolystarShape.Type;
							public static POLYGON: com.airbnb.lottie.model.content.PolystarShape.Type;
							public static values(): androidNative.Array<com.airbnb.lottie.model.content.PolystarShape.Type>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.airbnb.lottie.model.content.PolystarShape.Type;
							public static forValue(param0: number): com.airbnb.lottie.model.content.PolystarShape.Type;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class RectangleShape extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.RectangleShape>;
						public constructor(param0: string, param1: com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>, param2: com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>, param3: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param4: boolean);
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public isHidden(): boolean;
						public getCornerRadius(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getName(): string;
						public getPosition(): com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>;
						public toString(): string;
						public getSize(): com.airbnb.lottie.model.animatable.AnimatableValue<globalAndroid.graphics.PointF,globalAndroid.graphics.PointF>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class Repeater extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.Repeater>;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public isHidden(): boolean;
						public getOffset(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public constructor(param0: string, param1: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param2: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param3: com.airbnb.lottie.model.animatable.AnimatableTransform, param4: boolean);
						public getName(): string;
						public getCopies(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getTransform(): com.airbnb.lottie.model.animatable.AnimatableTransform;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class ShapeData extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapeData>;
						public isClosed(): boolean;
						public getCurves(): java.util.List<com.airbnb.lottie.model.CubicCurveData>;
						public constructor();
						public constructor(param0: globalAndroid.graphics.PointF, param1: boolean, param2: java.util.List<com.airbnb.lottie.model.CubicCurveData>);
						public getInitialPoint(): globalAndroid.graphics.PointF;
						public interpolateBetween(param0: com.airbnb.lottie.model.content.ShapeData, param1: com.airbnb.lottie.model.content.ShapeData, param2: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class ShapeFill extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapeFill>;
						public getColor(): com.airbnb.lottie.model.animatable.AnimatableColorValue;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public isHidden(): boolean;
						public getOpacity(): com.airbnb.lottie.model.animatable.AnimatableIntegerValue;
						public getFillType(): globalAndroid.graphics.Path.FillType;
						public getName(): string;
						public constructor(param0: string, param1: boolean, param2: globalAndroid.graphics.Path.FillType, param3: com.airbnb.lottie.model.animatable.AnimatableColorValue, param4: com.airbnb.lottie.model.animatable.AnimatableIntegerValue, param5: boolean);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class ShapeGroup extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapeGroup>;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public isHidden(): boolean;
						public constructor(param0: string, param1: java.util.List<com.airbnb.lottie.model.content.ContentModel>, param2: boolean);
						public getItems(): java.util.List<com.airbnb.lottie.model.content.ContentModel>;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class ShapePath extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapePath>;
						public constructor(param0: string, param1: number, param2: com.airbnb.lottie.model.animatable.AnimatableShapeValue, param3: boolean);
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public isHidden(): boolean;
						public getShapePath(): com.airbnb.lottie.model.animatable.AnimatableShapeValue;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class ShapeStroke extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapeStroke>;
						public getLineDashPattern(): java.util.List<com.airbnb.lottie.model.animatable.AnimatableFloatValue>;
						public getColor(): com.airbnb.lottie.model.animatable.AnimatableColorValue;
						public constructor(param0: string, param1: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param2: java.util.List<com.airbnb.lottie.model.animatable.AnimatableFloatValue>, param3: com.airbnb.lottie.model.animatable.AnimatableColorValue, param4: com.airbnb.lottie.model.animatable.AnimatableIntegerValue, param5: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param6: com.airbnb.lottie.model.content.ShapeStroke.LineCapType, param7: com.airbnb.lottie.model.content.ShapeStroke.LineJoinType, param8: number, param9: boolean);
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public getMiterLimit(): number;
						public getWidth(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getCapType(): com.airbnb.lottie.model.content.ShapeStroke.LineCapType;
						public isHidden(): boolean;
						public getOpacity(): com.airbnb.lottie.model.animatable.AnimatableIntegerValue;
						public getJoinType(): com.airbnb.lottie.model.content.ShapeStroke.LineJoinType;
						public getDashOffset(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getName(): string;
					}
					export module ShapeStroke {
						export class LineCapType {
							public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapeStroke.LineCapType>;
							public static BUTT: com.airbnb.lottie.model.content.ShapeStroke.LineCapType;
							public static ROUND: com.airbnb.lottie.model.content.ShapeStroke.LineCapType;
							public static UNKNOWN: com.airbnb.lottie.model.content.ShapeStroke.LineCapType;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public toPaintCap(): globalAndroid.graphics.Paint.Cap;
							public static values(): androidNative.Array<com.airbnb.lottie.model.content.ShapeStroke.LineCapType>;
							public static valueOf(param0: string): com.airbnb.lottie.model.content.ShapeStroke.LineCapType;
						}
						export class LineJoinType {
							public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapeStroke.LineJoinType>;
							public static MITER: com.airbnb.lottie.model.content.ShapeStroke.LineJoinType;
							public static ROUND: com.airbnb.lottie.model.content.ShapeStroke.LineJoinType;
							public static BEVEL: com.airbnb.lottie.model.content.ShapeStroke.LineJoinType;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public toPaintJoin(): globalAndroid.graphics.Paint.Join;
							public static valueOf(param0: string): com.airbnb.lottie.model.content.ShapeStroke.LineJoinType;
							public static values(): androidNative.Array<com.airbnb.lottie.model.content.ShapeStroke.LineJoinType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module content {
					export class ShapeTrimPath extends java.lang.Object implements com.airbnb.lottie.model.content.ContentModel {
						public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapeTrimPath>;
						public getType(): com.airbnb.lottie.model.content.ShapeTrimPath.Type;
						public toContent(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.BaseLayer): com.airbnb.lottie.animation.content.Content;
						public isHidden(): boolean;
						public getEnd(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public getOffset(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public constructor(param0: string, param1: com.airbnb.lottie.model.content.ShapeTrimPath.Type, param2: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param3: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param4: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param5: boolean);
						public getName(): string;
						public getStart(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
						public toString(): string;
					}
					export module ShapeTrimPath {
						export class Type {
							public static class: java.lang.Class<com.airbnb.lottie.model.content.ShapeTrimPath.Type>;
							public static SIMULTANEOUSLY: com.airbnb.lottie.model.content.ShapeTrimPath.Type;
							public static INDIVIDUALLY: com.airbnb.lottie.model.content.ShapeTrimPath.Type;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.airbnb.lottie.model.content.ShapeTrimPath.Type;
							public static forId(param0: number): com.airbnb.lottie.model.content.ShapeTrimPath.Type;
							public static values(): androidNative.Array<com.airbnb.lottie.model.content.ShapeTrimPath.Type>;
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module layer {
					export abstract class BaseLayer extends java.lang.Object implements com.airbnb.lottie.animation.content.DrawingContent, com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation.AnimationListener, com.airbnb.lottie.model.KeyPathElement {
						public static class: java.lang.Class<com.airbnb.lottie.model.layer.BaseLayer>;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public getBlurEffect(): com.airbnb.lottie.model.content.BlurEffect;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public setContents(param0: java.util.List<com.airbnb.lottie.animation.content.Content>, param1: java.util.List<com.airbnb.lottie.animation.content.Content>): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public removeAnimation(param0: com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>): void;
						public getDropShadowEffect(): com.airbnb.lottie.parser.DropShadowEffect;
						public getName(): string;
						public getBlurMaskFilter(param0: number): globalAndroid.graphics.BlurMaskFilter;
						public addAnimation(param0: com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>): void;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module layer {
					export class CompositionLayer extends com.airbnb.lottie.model.layer.BaseLayer {
						public static class: java.lang.Class<com.airbnb.lottie.model.layer.CompositionLayer>;
						public setProgress(param0: number): void;
						public resolveChildKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public onValueChanged(): void;
						public constructor(param0: com.airbnb.lottie.LottieDrawable, param1: com.airbnb.lottie.model.layer.Layer, param2: java.util.List<com.airbnb.lottie.model.layer.Layer>, param3: com.airbnb.lottie.LottieComposition);
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public setOutlineMasksAndMattes(param0: boolean): void;
						public hasMasks(): boolean;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public hasMatte(): boolean;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module layer {
					export class ImageLayer extends com.airbnb.lottie.model.layer.BaseLayer {
						public static class: java.lang.Class<com.airbnb.lottie.model.layer.ImageLayer>;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public drawLayer(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module layer {
					export class Layer extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.model.layer.Layer>;
						public constructor(param0: java.util.List<com.airbnb.lottie.model.content.ContentModel>, param1: com.airbnb.lottie.LottieComposition, param2: string, param3: number, param4: com.airbnb.lottie.model.layer.Layer.LayerType, param5: number, param6: string, param7: java.util.List<com.airbnb.lottie.model.content.Mask>, param8: com.airbnb.lottie.model.animatable.AnimatableTransform, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: com.airbnb.lottie.model.animatable.AnimatableTextFrame, param17: com.airbnb.lottie.model.animatable.AnimatableTextProperties, param18: java.util.List<com.airbnb.lottie.value.Keyframe<java.lang.Float>>, param19: com.airbnb.lottie.model.layer.Layer.MatteType, param20: com.airbnb.lottie.model.animatable.AnimatableFloatValue, param21: boolean, param22: com.airbnb.lottie.model.content.BlurEffect, param23: com.airbnb.lottie.parser.DropShadowEffect);
						public getLayerType(): com.airbnb.lottie.model.layer.Layer.LayerType;
						public toString(param0: string): string;
						public getBlurEffect(): com.airbnb.lottie.model.content.BlurEffect;
						public isHidden(): boolean;
						public getDropShadowEffect(): com.airbnb.lottie.parser.DropShadowEffect;
						public toString(): string;
						public getId(): number;
					}
					export module Layer {
						export class LayerType {
							public static class: java.lang.Class<com.airbnb.lottie.model.layer.Layer.LayerType>;
							public static PRE_COMP: com.airbnb.lottie.model.layer.Layer.LayerType;
							public static SOLID: com.airbnb.lottie.model.layer.Layer.LayerType;
							public static IMAGE: com.airbnb.lottie.model.layer.Layer.LayerType;
							public static NULL: com.airbnb.lottie.model.layer.Layer.LayerType;
							public static SHAPE: com.airbnb.lottie.model.layer.Layer.LayerType;
							public static TEXT: com.airbnb.lottie.model.layer.Layer.LayerType;
							public static UNKNOWN: com.airbnb.lottie.model.layer.Layer.LayerType;
							public static values(): androidNative.Array<com.airbnb.lottie.model.layer.Layer.LayerType>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.airbnb.lottie.model.layer.Layer.LayerType;
						}
						export class MatteType {
							public static class: java.lang.Class<com.airbnb.lottie.model.layer.Layer.MatteType>;
							public static NONE: com.airbnb.lottie.model.layer.Layer.MatteType;
							public static ADD: com.airbnb.lottie.model.layer.Layer.MatteType;
							public static INVERT: com.airbnb.lottie.model.layer.Layer.MatteType;
							public static LUMA: com.airbnb.lottie.model.layer.Layer.MatteType;
							public static LUMA_INVERTED: com.airbnb.lottie.model.layer.Layer.MatteType;
							public static UNKNOWN: com.airbnb.lottie.model.layer.Layer.MatteType;
							public static valueOf(param0: string): com.airbnb.lottie.model.layer.Layer.MatteType;
							public static values(): androidNative.Array<com.airbnb.lottie.model.layer.Layer.MatteType>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module layer {
					export class NullLayer extends com.airbnb.lottie.model.layer.BaseLayer {
						public static class: java.lang.Class<com.airbnb.lottie.model.layer.NullLayer>;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module layer {
					export class ShapeLayer extends com.airbnb.lottie.model.layer.BaseLayer {
						public static class: java.lang.Class<com.airbnb.lottie.model.layer.ShapeLayer>;
						public resolveChildKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public getBlurEffect(): com.airbnb.lottie.model.content.BlurEffect;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public getDropShadowEffect(): com.airbnb.lottie.parser.DropShadowEffect;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module layer {
					export class SolidLayer extends com.airbnb.lottie.model.layer.BaseLayer {
						public static class: java.lang.Class<com.airbnb.lottie.model.layer.SolidLayer>;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public drawLayer(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module model {
				export module layer {
					export class TextLayer extends com.airbnb.lottie.model.layer.BaseLayer {
						public static class: java.lang.Class<com.airbnb.lottie.model.layer.TextLayer>;
						public onValueChanged(): void;
						public getBounds(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Matrix, param2: boolean): void;
						public resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath): void;
						public addValueCallback(param0: any, param1: com.airbnb.lottie.value.LottieValueCallback<any>): void;
						public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: number): void;
					}
				}
			}
		}
	}
}


declare module com {
	export module airbnb {
		export module lottie {
			export module network {
				export class DefaultLottieFetchResult extends java.lang.Object implements com.airbnb.lottie.network.LottieFetchResult {
					public static class: java.lang.Class<com.airbnb.lottie.network.DefaultLottieFetchResult>;
					public bodyByteStream(): java.io.InputStream;
					public constructor(param0: java.net.HttpURLConnection);
					public contentType(): string;
					public isSuccessful(): boolean;
					public close(): void;
					public error(): string;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module network {
				export class DefaultLottieNetworkFetcher extends java.lang.Object implements com.airbnb.lottie.network.LottieNetworkFetcher {
					public static class: java.lang.Class<com.airbnb.lottie.network.DefaultLottieNetworkFetcher>;
					public fetchSync(param0: string): com.airbnb.lottie.network.LottieFetchResult;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module network {
				export class FileExtension {
					public static class: java.lang.Class<com.airbnb.lottie.network.FileExtension>;
					public static JSON: com.airbnb.lottie.network.FileExtension;
					public static ZIP: com.airbnb.lottie.network.FileExtension;
					public extension: string;
					public toString(): string;
					public static values(): androidNative.Array<com.airbnb.lottie.network.FileExtension>;
					public static forFile(param0: string): com.airbnb.lottie.network.FileExtension;
					public static valueOf(param0: string): com.airbnb.lottie.network.FileExtension;
					public tempExtension(): string;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module network {
				export class LottieFetchResult extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.airbnb.lottie.network.LottieFetchResult>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.network.LottieFetchResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isSuccessful(): boolean;
						bodyByteStream(): java.io.InputStream;
						contentType(): string;
						error(): string;
						close(): void;
						close(): void;
					});
					public constructor();
					public bodyByteStream(): java.io.InputStream;
					public contentType(): string;
					public isSuccessful(): boolean;
					public close(): void;
					public error(): string;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module network {
				export class LottieNetworkCacheProvider extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.network.LottieNetworkCacheProvider>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.network.LottieNetworkCacheProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCacheDir(): java.io.File;
					});
					public constructor();
					public getCacheDir(): java.io.File;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module network {
				export class LottieNetworkFetcher extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.network.LottieNetworkFetcher>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.network.LottieNetworkFetcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchSync(param0: string): com.airbnb.lottie.network.LottieFetchResult;
					});
					public constructor();
					public fetchSync(param0: string): com.airbnb.lottie.network.LottieFetchResult;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module network {
				export class NetworkCache extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.network.NetworkCache>;
					public clear(): void;
					public constructor(param0: com.airbnb.lottie.network.LottieNetworkCacheProvider);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module network {
				export class NetworkFetcher extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.network.NetworkFetcher>;
					public constructor(param0: com.airbnb.lottie.network.NetworkCache, param1: com.airbnb.lottie.network.LottieNetworkFetcher);
					public fetchSync(param0: string, param1: string): com.airbnb.lottie.LottieResult<com.airbnb.lottie.LottieComposition>;
				}
			}
		}
	}
}


declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class AnimatablePathValueParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.AnimatablePathValueParser>;
					public static parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: com.airbnb.lottie.LottieComposition): com.airbnb.lottie.model.animatable.AnimatablePathValue;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class AnimatableTextPropertiesParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.AnimatableTextPropertiesParser>;
					public static parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: com.airbnb.lottie.LottieComposition): com.airbnb.lottie.model.animatable.AnimatableTextProperties;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class AnimatableTransformParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.AnimatableTransformParser>;
					public static parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: com.airbnb.lottie.LottieComposition): com.airbnb.lottie.model.animatable.AnimatableTransform;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class AnimatableValueParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.AnimatableValueParser>;
					public static parseFloat(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: com.airbnb.lottie.LottieComposition, param2: boolean): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
					public static parseFloat(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: com.airbnb.lottie.LottieComposition): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class BlurEffectParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.BlurEffectParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class CircleShapeParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.CircleShapeParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ColorParser extends com.airbnb.lottie.parser.ValueParser<java.lang.Integer> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ColorParser>;
					public static INSTANCE: com.airbnb.lottie.parser.ColorParser;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): java.lang.Integer;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ContentModelParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ContentModelParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class DocumentDataParser extends com.airbnb.lottie.parser.ValueParser<com.airbnb.lottie.model.DocumentData> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.DocumentDataParser>;
					public static INSTANCE: com.airbnb.lottie.parser.DocumentDataParser;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): com.airbnb.lottie.model.DocumentData;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class DropShadowEffect extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.DropShadowEffect>;
					public getOpacity(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
					public getColor(): com.airbnb.lottie.model.animatable.AnimatableColorValue;
					public getDirection(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
					public getRadius(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
					public getDistance(): com.airbnb.lottie.model.animatable.AnimatableFloatValue;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class DropShadowEffectParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.DropShadowEffectParser>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class FloatParser extends com.airbnb.lottie.parser.ValueParser<java.lang.Float> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.FloatParser>;
					public static INSTANCE: com.airbnb.lottie.parser.FloatParser;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): java.lang.Float;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class FontCharacterParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.FontCharacterParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class FontParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.FontParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class GradientColorParser extends com.airbnb.lottie.parser.ValueParser<com.airbnb.lottie.model.content.GradientColor> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.GradientColorParser>;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): com.airbnb.lottie.model.content.GradientColor;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class GradientFillParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.GradientFillParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class GradientStrokeParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.GradientStrokeParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class IntegerParser extends com.airbnb.lottie.parser.ValueParser<java.lang.Integer> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.IntegerParser>;
					public static INSTANCE: com.airbnb.lottie.parser.IntegerParser;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): java.lang.Integer;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class JsonUtils extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.JsonUtils>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class KeyframeParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.KeyframeParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class KeyframesParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.KeyframesParser>;
					public static setEndFrames(param0: java.util.List): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class LayerParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.LayerParser>;
					public static parse(param0: com.airbnb.lottie.LottieComposition): com.airbnb.lottie.model.layer.Layer;
					public static parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: com.airbnb.lottie.LottieComposition): com.airbnb.lottie.model.layer.Layer;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class LottieCompositionMoshiParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.LottieCompositionMoshiParser>;
					public constructor();
					public static parse(param0: com.airbnb.lottie.parser.moshi.JsonReader): com.airbnb.lottie.LottieComposition;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class LottieCompositionParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.LottieCompositionParser>;
					public constructor();
					public static parse(param0: com.airbnb.lottie.parser.moshi.JsonReader): com.airbnb.lottie.LottieComposition;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class MaskParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.MaskParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class MergePathsParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.MergePathsParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class PathKeyframeParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.PathKeyframeParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class PathParser extends com.airbnb.lottie.parser.ValueParser<globalAndroid.graphics.PointF> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.PathParser>;
					public static INSTANCE: com.airbnb.lottie.parser.PathParser;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): globalAndroid.graphics.PointF;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class PointFParser extends com.airbnb.lottie.parser.ValueParser<globalAndroid.graphics.PointF> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.PointFParser>;
					public static INSTANCE: com.airbnb.lottie.parser.PointFParser;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): globalAndroid.graphics.PointF;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class PolystarShapeParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.PolystarShapeParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class RectangleShapeParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.RectangleShapeParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class RepeaterParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.RepeaterParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ScaleXYParser extends com.airbnb.lottie.parser.ValueParser<com.airbnb.lottie.value.ScaleXY> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ScaleXYParser>;
					public static INSTANCE: com.airbnb.lottie.parser.ScaleXYParser;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): com.airbnb.lottie.value.ScaleXY;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ShapeDataParser extends com.airbnb.lottie.parser.ValueParser<com.airbnb.lottie.model.content.ShapeData> {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ShapeDataParser>;
					public static INSTANCE: com.airbnb.lottie.parser.ShapeDataParser;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): any;
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): com.airbnb.lottie.model.content.ShapeData;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ShapeFillParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ShapeFillParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ShapeGroupParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ShapeGroupParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ShapePathParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ShapePathParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ShapeStrokeParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ShapeStrokeParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ShapeTrimPathParser extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ShapeTrimPathParser>;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export class ValueParser<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.parser.ValueParser<any>>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.parser.ValueParser<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): V;
					});
					public constructor();
					public parse(param0: com.airbnb.lottie.parser.moshi.JsonReader, param1: number): V;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export module moshi {
					export class JsonDataException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.JsonDataException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export module moshi {
					export class JsonEncodingException extends java.io.IOException {
						public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.JsonEncodingException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export module moshi {
					export abstract class JsonReader extends java.lang.Object implements java.io.Closeable {
						public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.JsonReader>;
						public selectName(param0: com.airbnb.lottie.parser.moshi.JsonReader.Options): number;
						public beginObject(): void;
						public nextBoolean(): boolean;
						public peek(): com.airbnb.lottie.parser.moshi.JsonReader.Token;
						public close(): void;
						public skipName(): void;
						public static of(param0: okio.BufferedSource): com.airbnb.lottie.parser.moshi.JsonReader;
						public endArray(): void;
						public getPath(): string;
						public beginArray(): void;
						public endObject(): void;
						public nextInt(): number;
						public nextName(): string;
						public skipValue(): void;
						public hasNext(): boolean;
						public nextDouble(): number;
						public nextString(): string;
					}
					export module JsonReader {
						export class Options extends java.lang.Object {
							public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.JsonReader.Options>;
							public static of(param0: androidNative.Array<string>): com.airbnb.lottie.parser.moshi.JsonReader.Options;
						}
						export class Token {
							public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.JsonReader.Token>;
							public static BEGIN_ARRAY: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static END_ARRAY: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static BEGIN_OBJECT: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static END_OBJECT: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static NAME: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static STRING: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static NUMBER: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static BOOLEAN: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static NULL: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static END_DOCUMENT: com.airbnb.lottie.parser.moshi.JsonReader.Token;
							public static values(): androidNative.Array<com.airbnb.lottie.parser.moshi.JsonReader.Token>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.airbnb.lottie.parser.moshi.JsonReader.Token;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export module moshi {
					export class JsonScope extends java.lang.Object {
						public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.JsonScope>;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export module moshi {
					export class JsonUtf8Reader extends com.airbnb.lottie.parser.moshi.JsonReader {
						public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.JsonUtf8Reader>;
						public selectName(param0: com.airbnb.lottie.parser.moshi.JsonReader.Options): number;
						public beginObject(): void;
						public nextBoolean(): boolean;
						public peek(): com.airbnb.lottie.parser.moshi.JsonReader.Token;
						public close(): void;
						public skipName(): void;
						public endArray(): void;
						public beginArray(): void;
						public endObject(): void;
						public toString(): string;
						public nextInt(): number;
						public nextName(): string;
						public skipValue(): void;
						public hasNext(): boolean;
						public nextDouble(): number;
						public nextString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module parser {
				export module moshi {
					export class LinkedHashTreeMap<K, V>  extends java.util.AbstractMap<any,any> implements java.io.Serializable  {
						public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.LinkedHashTreeMap<any,any>>;
						public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any): java.util.Map;
						public put(param0: any, param1: any): any;
						public remove(param0: any): any;
						public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
						public replace(param0: any, param1: any): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getOrDefault(param0: any, param1: any): any;
						public values(): java.util.Collection<any>;
						public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any): java.util.Map;
						public static ofEntries(param0: androidNative.Array<java.util.Map.Entry>): java.util.Map;
						public putAll(param0: java.util.Map<any,any>): void;
						public static of(param0: any, param1: any, param2: any, param3: any): java.util.Map;
						public isEmpty(): boolean;
						public static entry(param0: any, param1: any): java.util.Map.Entry;
						public remove(param0: any, param1: any): boolean;
						public size(): number;
						public putIfAbsent(param0: any, param1: any): any;
						public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
						public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.Map;
						public forEach(param0: any /* any<any,any>*/): void;
						public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
						public get(param0: any): any;
						public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
						public containsValue(param0: any): boolean;
						public containsKey(param0: any): boolean;
						public static of(param0: any, param1: any): java.util.Map;
						public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any): java.util.Map;
						public static of(): java.util.Map;
						public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map;
						public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map;
						public compute(param0: any, param1: any /* any<any,any,any>*/): any;
						public replaceAll(param0: any /* any<any,any,any>*/): void;
						public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.Map;
						public clear(): void;
						public replace(param0: any, param1: any, param2: any): boolean;
						public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any): java.util.Map;
						public keySet(): java.util.Set<any>;
					}
					export module LinkedHashTreeMap {
						export class AvlBuilder<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.AvlBuilder<any,any>>;
						}
						export class AvlIterator<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.AvlIterator<any,any>>;
							public next(): com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.Node<K,V>;
						}
						export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.EntrySet>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.Set;
							public contains(param0: any): boolean;
							public static of(param0: any): java.util.Set;
							public size(): number;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): java.util.Set;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							public toArray(): androidNative.Array<any>;
							public stream(): java.util.stream.Stream<any>;
							public static of(param0: any, param1: any): java.util.Set;
							public addAll(param0: java.util.Collection<any>): boolean;
							public static of(param0: any, param1: any, param2: any, param3: any): java.util.Set;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Set;
							public add(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public static of(): java.util.Set;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any): java.util.Set;
							public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
							public retainAll(param0: java.util.Collection<any>): boolean;
							public iterator(): java.util.Iterator<any>;
							public containsAll(param0: java.util.Collection<any>): boolean;
							public remove(param0: any): boolean;
							public static of(param0: androidNative.Array<any>): java.util.Set;
							public clear(): void;
							public removeIf(param0: any /* any*/): boolean;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.Set;
							public static of(param0: any, param1: any, param2: any): java.util.Set;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any): java.util.Set;
							public isEmpty(): boolean;
							public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
							public equals(param0: any): boolean;
							public parallelStream(): java.util.stream.Stream<any>;
						}
						export class KeySet extends java.util.AbstractSet<any> {
							public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.KeySet>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.Set;
							public contains(param0: any): boolean;
							public static of(param0: any): java.util.Set;
							public size(): number;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): java.util.Set;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							public toArray(): androidNative.Array<any>;
							public stream(): java.util.stream.Stream<any>;
							public static of(param0: any, param1: any): java.util.Set;
							public addAll(param0: java.util.Collection<any>): boolean;
							public static of(param0: any, param1: any, param2: any, param3: any): java.util.Set;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Set;
							public add(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public static of(): java.util.Set;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any): java.util.Set;
							public retainAll(param0: java.util.Collection<any>): boolean;
							public iterator(): java.util.Iterator<any>;
							public containsAll(param0: java.util.Collection<any>): boolean;
							public remove(param0: any): boolean;
							public static of(param0: androidNative.Array<any>): java.util.Set;
							public clear(): void;
							public removeIf(param0: any /* any*/): boolean;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.Set;
							public static of(param0: any, param1: any, param2: any): java.util.Set;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any): java.util.Set;
							public isEmpty(): boolean;
							public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
							public equals(param0: any): boolean;
							public parallelStream(): java.util.stream.Stream<any>;
						}
						export abstract class LinkedTreeMapIterator<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.LinkedTreeMapIterator<any>>;
							public hasNext(): boolean;
							public remove(): void;
						}
						export class Node<K, V>  extends java.util.Map.Entry<any,any> {
							public static class: java.lang.Class<com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.Node<any,any>>;
							public getValue(): any;
							public last(): com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.Node<any,any>;
							public hashCode(): number;
							public getKey(): any;
							public first(): com.airbnb.lottie.parser.moshi.LinkedHashTreeMap.Node<any,any>;
							public static comparingByValue(param0: java.util.Comparator): java.util.Comparator;
							public toString(): string;
							public setValue(param0: any): any;
							public equals(param0: any): boolean;
							public static comparingByKey(param0: java.util.Comparator): java.util.Comparator;
							public static comparingByKey(): java.util.Comparator;
							public static comparingByValue(): java.util.Comparator;
						}
					}
				}
			}
		}
	}
}



declare module com {
	export module airbnb {
		export module lottie {
			export module utils {
				export abstract class BaseLottieAnimator extends globalAndroid.animation.ValueAnimator {
					public static class: java.lang.Class<com.airbnb.lottie.utils.BaseLottieAnimator>;
					public setInterpolator(param0: globalAndroid.animation.TimeInterpolator): void;
					public removeAllListeners(): void;
					public constructor();
					public addListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
					public getStartDelay(): number;
					public removeListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
					public setDuration(param0: number): globalAndroid.animation.ValueAnimator;
					public removeAllUpdateListeners(): void;
					public addUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
					public setDuration(param0: number): globalAndroid.animation.Animator;
					public setStartDelay(param0: number): void;
					public removeUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module utils {
				export class GammaEvaluator extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.utils.GammaEvaluator>;
					public constructor();
					public static evaluate(param0: number, param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module utils {
				export class LogcatLogger extends java.lang.Object implements com.airbnb.lottie.LottieLogger {
					public static class: java.lang.Class<com.airbnb.lottie.utils.LogcatLogger>;
					public debug(param0: string, param1: java.lang.Throwable): void;
					public warning(param0: string, param1: java.lang.Throwable): void;
					public constructor();
					public warning(param0: string): void;
					public error(param0: string, param1: java.lang.Throwable): void;
					public debug(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module utils {
				export class Logger extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.utils.Logger>;
					public static warning(param0: string): void;
					public static setInstance(param0: com.airbnb.lottie.LottieLogger): void;
					public static debug(param0: string): void;
					public constructor();
					public static debug(param0: string, param1: java.lang.Throwable): void;
					public static warning(param0: string, param1: java.lang.Throwable): void;
					public static error(param0: string, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module utils {
				export class LottieValueAnimator extends com.airbnb.lottie.utils.BaseLottieAnimator implements globalAndroid.view.Choreographer.FrameCallback {
					public static class: java.lang.Class<com.airbnb.lottie.utils.LottieValueAnimator>;
					public running: boolean;
					public setFrame(param0: number): void;
					public doFrame(param0: number): void;
					public playAnimation(): void;
					public setSpeed(param0: number): void;
					public endAnimation(): void;
					public getDuration(): number;
					public setMinAndMaxFrames(param0: number, param1: number): void;
					public removeFrameCallback(param0: boolean): void;
					public constructor();
					public setMinFrame(param0: number): void;
					public setMaxFrame(param0: number): void;
					public getMinFrame(): number;
					public getAnimatedValue(param0: string): any;
					public setComposition(param0: com.airbnb.lottie.LottieComposition): void;
					public postFrameCallback(): void;
					public resumeAnimation(): void;
					public removeFrameCallback(): void;
					public getAnimatedFraction(): number;
					public cancel(): void;
					public pauseAnimation(): void;
					public getAnimatedValueAbsolute(): number;
					public getSpeed(): number;
					public getFrame(): number;
					public isRunning(): boolean;
					public getAnimatedValue(): any;
					public clearComposition(): void;
					public getMaxFrame(): number;
					public setRepeatMode(param0: number): void;
					public reverseAnimationSpeed(): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module utils {
				export class MeanCalculator extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.utils.MeanCalculator>;
					public constructor();
					public add(param0: number): void;
					public getMean(): number;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module utils {
				export class MiscUtils extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.utils.MiscUtils>;
					public static addPoints(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF): globalAndroid.graphics.PointF;
					public static resolveKeyPath(param0: com.airbnb.lottie.model.KeyPath, param1: number, param2: java.util.List<com.airbnb.lottie.model.KeyPath>, param3: com.airbnb.lottie.model.KeyPath, param4: com.airbnb.lottie.animation.content.KeyPathElementContent): void;
					public static clamp(param0: number, param1: number, param2: number): number;
					public constructor();
					public static getPathFromData(param0: com.airbnb.lottie.model.content.ShapeData, param1: globalAndroid.graphics.Path): void;
					public static lerp(param0: number, param1: number, param2: number): number;
					public static contains(param0: number, param1: number, param2: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module utils {
				export class Utils extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.utils.Utils>;
					public static SECOND_IN_NANOS: number;
					public static applyTrimPathIfNeeded(param0: globalAndroid.graphics.Path, param1: number, param2: number, param3: number): void;
					public static isAtLeastVersion(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
					public static resizeBitmapIfNeeded(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): globalAndroid.graphics.Bitmap;
					public static getAnimationScale(param0: globalAndroid.content.Context): number;
					public static closeQuietly(param0: java.io.Closeable): void;
					public static getScale(param0: globalAndroid.graphics.Matrix): number;
					public static createPath(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF): globalAndroid.graphics.Path;
					public static applyTrimPathIfNeeded(param0: globalAndroid.graphics.Path, param1: com.airbnb.lottie.animation.content.TrimPathContent): void;
					public static dpScale(): number;
					public static saveLayerCompat(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.RectF, param2: globalAndroid.graphics.Paint, param3: number): void;
					public static hashFor(param0: number, param1: number, param2: number, param3: number): number;
					public static renderPath(param0: globalAndroid.graphics.Path): globalAndroid.graphics.Bitmap;
					public static saveLayerCompat(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.RectF, param2: globalAndroid.graphics.Paint): void;
					public static hasZeroScaleAxis(param0: globalAndroid.graphics.Matrix): boolean;
					public static isNetworkException(param0: java.lang.Throwable): boolean;
				}
			}
		}
	}
}


declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class Keyframe<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.value.Keyframe<any>>;
					public startValue: T;
					public endValue: T;
					public interpolator: globalAndroid.view.animation.Interpolator;
					public xInterpolator: globalAndroid.view.animation.Interpolator;
					public yInterpolator: globalAndroid.view.animation.Interpolator;
					public startFrame: number;
					public endFrame: java.lang.Float;
					public pathCp1: globalAndroid.graphics.PointF;
					public pathCp2: globalAndroid.graphics.PointF;
					public isStatic(): boolean;
					public constructor(param0: com.airbnb.lottie.LottieComposition, param1: T, param2: T, param3: globalAndroid.view.animation.Interpolator, param4: number, param5: java.lang.Float);
					public constructor(param0: com.airbnb.lottie.LottieComposition, param1: T, param2: T, param3: globalAndroid.view.animation.Interpolator, param4: globalAndroid.view.animation.Interpolator, param5: number, param6: java.lang.Float);
					public getEndValueInt(): number;
					public toString(): string;
					public containsProgress(param0: number): boolean;
					public getStartValueInt(): number;
					public getEndValueFloat(): number;
					public constructor(param0: T);
					public getStartProgress(): number;
					public getEndProgress(): number;
					public getStartValueFloat(): number;
					public constructor(param0: com.airbnb.lottie.LottieComposition, param1: T, param2: T, param3: globalAndroid.view.animation.Interpolator, param4: globalAndroid.view.animation.Interpolator, param5: globalAndroid.view.animation.Interpolator, param6: number, param7: java.lang.Float);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class LottieFrameInfo<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieFrameInfo<any>>;
					public getStartFrame(): number;
					public getEndFrame(): number;
					public getOverallProgress(): number;
					public constructor();
					public getEndValue(): T;
					public getLinearKeyframeProgress(): number;
					public set(param0: number, param1: number, param2: T, param3: T, param4: number, param5: number, param6: number): com.airbnb.lottie.value.LottieFrameInfo<T>;
					public getInterpolatedKeyframeProgress(): number;
					public getStartValue(): T;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class LottieInterpolatedFloatValue extends com.airbnb.lottie.value.LottieInterpolatedValue<java.lang.Float> {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieInterpolatedFloatValue>;
					public constructor();
					public constructor(param0: any);
					public constructor(param0: java.lang.Float, param1: java.lang.Float);
					public constructor(param0: java.lang.Float, param1: java.lang.Float, param2: globalAndroid.view.animation.Interpolator);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class LottieInterpolatedIntegerValue extends com.airbnb.lottie.value.LottieInterpolatedValue<java.lang.Integer> {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieInterpolatedIntegerValue>;
					public constructor(param0: java.lang.Integer, param1: java.lang.Integer);
					public constructor();
					public constructor(param0: java.lang.Integer, param1: java.lang.Integer, param2: globalAndroid.view.animation.Interpolator);
					public constructor(param0: any);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class LottieInterpolatedPointValue extends com.airbnb.lottie.value.LottieInterpolatedValue<globalAndroid.graphics.PointF> {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieInterpolatedPointValue>;
					public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF);
					public constructor();
					public constructor(param0: any);
					public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.view.animation.Interpolator);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export abstract class LottieInterpolatedValue<T>  extends com.airbnb.lottie.value.LottieValueCallback<any> {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieInterpolatedValue<any>>;
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<any>): any;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class LottieRelativeFloatValueCallback extends com.airbnb.lottie.value.LottieValueCallback<java.lang.Float> {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieRelativeFloatValueCallback>;
					public getOffset(param0: com.airbnb.lottie.value.LottieFrameInfo<java.lang.Float>): java.lang.Float;
					public constructor();
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<any>): any;
					public constructor(param0: java.lang.Float);
					public constructor(param0: any);
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<java.lang.Float>): java.lang.Float;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class LottieRelativeIntegerValueCallback extends com.airbnb.lottie.value.LottieValueCallback<java.lang.Integer> {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieRelativeIntegerValueCallback>;
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<java.lang.Integer>): java.lang.Integer;
					public constructor();
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<any>): any;
					public getOffset(param0: com.airbnb.lottie.value.LottieFrameInfo<java.lang.Integer>): java.lang.Integer;
					public constructor(param0: any);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class LottieRelativePointValueCallback extends com.airbnb.lottie.value.LottieValueCallback<globalAndroid.graphics.PointF> {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieRelativePointValueCallback>;
					public getOffset(param0: com.airbnb.lottie.value.LottieFrameInfo<globalAndroid.graphics.PointF>): globalAndroid.graphics.PointF;
					public constructor();
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<any>): any;
					public constructor(param0: any);
					public constructor(param0: globalAndroid.graphics.PointF);
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<globalAndroid.graphics.PointF>): globalAndroid.graphics.PointF;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class LottieValueCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.value.LottieValueCallback<any>>;
					public value: T;
					public setValue(param0: T): void;
					public getValueInternal(param0: number, param1: number, param2: T, param3: T, param4: number, param5: number, param6: number): T;
					public constructor();
					public constructor(param0: T);
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<T>): T;
					public setAnimation(param0: com.airbnb.lottie.animation.keyframe.BaseKeyframeAnimation<any,any>): void;
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class ScaleXY extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.value.ScaleXY>;
					public equals(param0: any): boolean;
					public getScaleX(): number;
					public equals(param0: number, param1: number): boolean;
					public getScaleY(): number;
					public toString(): string;
					public constructor();
					public set(param0: number, param1: number): void;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module airbnb {
		export module lottie {
			export module value {
				export class SimpleLottieValueCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.airbnb.lottie.value.SimpleLottieValueCallback<any>>;
					/**
					 * Constructs a new instance of the com.airbnb.lottie.value.SimpleLottieValueCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<T>): T;
					});
					public constructor();
					public getValue(param0: com.airbnb.lottie.value.LottieFrameInfo<T>): T;
				}
			}
		}
	}
}

declare module com {
	export module nativescript {
		export module lottie {
			export class LottieAnimationView extends com.airbnb.lottie.LottieAnimationView {
				public static class: java.lang.Class<com.nativescript.lottie.LottieAnimationView>;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}