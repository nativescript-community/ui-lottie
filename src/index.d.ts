import { View } from 'tns-core-modules/ui/core/view';

export declare class LottieView extends View {
  constructor();
  readonly ios: any;
  readonly android: any;
  constructor();
  src: string;
  loop: boolean;
  cacheStrategy: EnumCacheStrategy;
  autoPlay: boolean;
  createNativeView(): View;
  onLoaded(): void;
  //both platforms
  playAnimation(): void;
  cancelAnimation(): void;
  isAnimating(): boolean;
  readonly duration: number;
  progress: number;
  speed: number;
  frame: number;
  //android specific
  resumeAnimation(): void;
  minProgress: number;
  maxProgress: number;
  setMinAndMaxProgress(minProgress: number, maxProgress: number): void;
  scale: number;
  minFrame: number;
  setMinAndMaxFrame(minFrame: number, maxFrame: number): void;
  maxFrame: number;
  performanceTrackingEnabled: boolean;
  readonly performanceTracker: any;
  reverseAnimationSpeed(): void;
  //ios specific
  contentMode: any;
}

export declare enum EnumCacheStrategy {
  None = 0,
  Weak = 1,
  Strong = 2
}
