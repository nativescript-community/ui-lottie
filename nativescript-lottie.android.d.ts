import { View } from "ui/core/view";
export declare class LottieView extends View {
    private _src;
    private _loop;
    private _autoPlay;
    private _cacheStrategy;
    private _android;
    constructor();
    readonly android: any;
    readonly _nativeView: any;
    src: string;
    loop: boolean;
    cacheStrategy: CacheStrategy;
    autoPlay: boolean;
    _createUI(): void;
    playAnimation(): void;
    isAnimating(): boolean;
    setProgress(value: any): void;
    cancelAnimation(): void;
}
export declare enum CacheStrategy {
    None,
    Weak,
    Strong,
}
