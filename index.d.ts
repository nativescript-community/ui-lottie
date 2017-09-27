import { View } from "tns-core-modules/ui/content-view";

export declare class LottieView extends View {
    private _src;
    private _loop;
    private _cacheStrategy;
    constructor();
    src: string;
    loop: boolean;
    cacheStrategy: EnumCacheStrategy;
    createNativeView(): View;
    playAnimation(): void;
    isAnimating(): boolean;
    setProgress(value: any): void;
    cancelAnimation(): void;
}

export declare enum EnumCacheStrategy {
    None = 0,
    Weak = 1,
    Strong = 2,
}
