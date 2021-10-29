
declare class DotLottie extends NSObject {

    static alloc(): DotLottie; // inherited from NSObject

    static new(): DotLottie; // inherited from NSObject

    static objcLoadWithNameShouldCacheCompletion(name: string, shouldCache: boolean, completion: (p1: Animation) => void): void;
    static objcLoadFromShouldCacheCompletion(url: NSURL, shouldCache: boolean, completion: (p1: Animation) => void): void;
}

declare let dotLottieVersionNumber: number;

declare let dotLottieVersionString: interop.Reference<number>;
