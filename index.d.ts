import { View } from "tns-core-modules/ui/core/view";

export declare class LottieView extends View {
    constructor();
    src: string;
    loop: boolean;
    cacheStrategy: EnumCacheStrategy;
    autoPlay: boolean;
    createNativeView(): View;
    playAnimation(): void;
    isAnimating(): boolean;
    setProgress(value: number): void;
    cancelAnimation(): void;
    contentMode: any;
}

export declare enum EnumCacheStrategy {
    None = 0,
    Weak = 1,
    Strong = 2,
}
