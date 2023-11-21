/* eslint-disable @typescript-eslint/unified-signatures */
declare class AnimatedButton extends AnimatedControl {
    static alloc(): AnimatedButton; // inherited from NSObject

    static appearance(): AnimatedButton; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): AnimatedButton; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnimatedButton; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
        trait: UITraitCollection,
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): AnimatedButton; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimatedButton; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): AnimatedButton; // inherited from UIAppearance

    static new(): AnimatedButton; // inherited from NSObject
}

declare class AnimatedControl extends UIControl {
    static alloc(): AnimatedControl; // inherited from NSObject

    static appearance(): AnimatedControl; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): AnimatedControl; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(
        trait: UITraitCollection,
        ContainerClass: typeof NSObject
    ): AnimatedControl; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
        trait: UITraitCollection,
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): AnimatedControl; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimatedControl; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): AnimatedControl; // inherited from UIAppearance

    static new(): AnimatedControl; // inherited from NSObject
}

declare class AnimatedSwitch extends AnimatedControl {
    static alloc(): AnimatedSwitch; // inherited from NSObject

    static appearance(): AnimatedSwitch; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): AnimatedSwitch; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnimatedSwitch; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
        trait: UITraitCollection,
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): AnimatedSwitch; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimatedSwitch; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): AnimatedSwitch; // inherited from UIAppearance

    static new(): AnimatedSwitch; // inherited from NSObject
}

declare class AnimationSubview extends UIView {
    static alloc(): AnimationSubview; // inherited from NSObject

    static appearance(): AnimationSubview; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): AnimationSubview; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(
        trait: UITraitCollection,
        ContainerClass: typeof NSObject
    ): AnimationSubview; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
        trait: UITraitCollection,
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): AnimationSubview; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimationSubview; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): AnimationSubview; // inherited from UIAppearance

    static new(): AnimationSubview; // inherited from NSObject
}

declare class CompatibleAnimation extends NSObject {
    static alloc(): CompatibleAnimation; // inherited from NSObject

    static new(): CompatibleAnimation; // inherited from NSObject

    constructor(o: { filepath: string });

    constructor(o: { json: string });

    constructor(o: { name: string; bundle: NSBundle });

    constructor(o: { name: string; subdirectory: string; bundle: NSBundle });

    initWithFilepath(filepath: string): this;

    initWithJson(json: string): this;

    initWithNameBundle(name: string, bundle: NSBundle): this;

    initWithNameSubdirectoryBundle(name: string, subdirectory: string, bundle: NSBundle): this;
}

declare class CompatibleAnimationKeypath extends NSObject {
    static alloc(): CompatibleAnimationKeypath; // inherited from NSObject

    static new(): CompatibleAnimationKeypath; // inherited from NSObject

    constructor(o: { keypath: string });

    constructor(o: { keys: NSArray<string> | string[] });

    initWithKeypath(keypath: string): this;

    initWithKeys(keys: NSArray<string> | string[]): this;
}

declare class CompatibleAnimationView extends UIView {
    static alloc(): CompatibleAnimationView; // inherited from NSObject

    static appearance(): CompatibleAnimationView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): CompatibleAnimationView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(
        trait: UITraitCollection,
        ContainerClass: typeof NSObject
    ): CompatibleAnimationView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
        trait: UITraitCollection,
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): CompatibleAnimationView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CompatibleAnimationView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): CompatibleAnimationView; // inherited from UIAppearance

    static new(): CompatibleAnimationView; // inherited from NSObject

    animation: LottieAnimation;

    readonly animationDuration: number;

    animationSpeed: number;

    backgroundMode: CompatibleBackgroundBehavior;

    compatibleAnimation: CompatibleAnimation;

    compatibleDictionaryTextProvider: CompatibleDictionaryTextProvider;

    currentFrame: number;

    currentProgress: number;

    currentTime: number;

    readonly duration: number;

    readonly isAnimationPlaying: boolean;

    loopAnimationCount: number;

    readonly realtimeAnimationFrame: number;

    readonly realtimeAnimationProgress: number;

    respectAnimationFrameRate: boolean;

    shouldRasterizeWhenIdle: boolean;

    constructor(o: { compatibleAnimation: CompatibleAnimation });

    constructor(o: {
        compatibleAnimation: CompatibleAnimation;
        compatibleRenderingEngineOption: CompatibleRenderingEngineOption;
    });

    constructor(o: { data: NSData });

    constructor(o: { data: NSData; compatibleRenderingEngineOption: CompatibleRenderingEngineOption });

    constructor(o: { url: NSURL });

    constructor(o: { url: NSURL; compatibleRenderingEngineOption: CompatibleRenderingEngineOption });

    addSubviewForLayerAt(subview: AnimationSubview, keypath: CompatibleAnimationKeypath): void;

    convertWithPointToLayerAt(point: CGPoint, keypath: CompatibleAnimationKeypath): CGPoint;

    convertWithRectToLayerAt(rect: CGRect, keypath: CompatibleAnimationKeypath): CGRect;

    durationFrameTimeForMarker(named: string): number;

    forceDisplayUpdate(): void;

    frameTimeForMarker(named: string): number;

    getColorValueForAtFrame(keypath: CompatibleAnimationKeypath, atFrame: number): UIColor;

    getFloatValueForAtFrame(keypath: CompatibleAnimationKeypath, atFrame: number): number;

    getValueForAtFrame(keypath: CompatibleAnimationKeypath, atFrame: number): any;

    initWithCompatibleAnimation(compatibleAnimation: CompatibleAnimation): this;

    initWithCompatibleAnimationCompatibleRenderingEngineOption(
        compatibleAnimation: CompatibleAnimation,
        compatibleRenderingEngineOption: CompatibleRenderingEngineOption
    ): this;

    initWithData(data: NSData): this;

    initWithDataCompatibleRenderingEngineOption(
        data: NSData,
        compatibleRenderingEngineOption: CompatibleRenderingEngineOption
    ): this;

    initWithUrl(url: NSURL): this;

    initWithUrlCompatibleRenderingEngineOption(
        url: NSURL,
        compatibleRenderingEngineOption: CompatibleRenderingEngineOption
    ): this;

    logHierarchyKeypaths(): void;

    pause(): void;

    play(): void;

    playFromFrameToFrameCompletion(fromFrame: number, toFrame: number, completion: (p1: boolean) => void): void;

    playFromMarkerToMarkerCompletion(fromMarker: string, toMarker: string, completion: (p1: boolean) => void): void;

    playFromProgressToProgressCompletion(fromProgress: number, toProgress: number, completion: (p1: boolean) => void): void;

    playWithCompletion(completion: (p1: boolean) => void): void;

    playWithMarkerCompletion(marker: string, completion: (p1: boolean) => void): void;

    progressTimeForMarker(named: string): number;

    reloadImages(): void;

    setColorValueForKeypath(color: UIColor, keypath: CompatibleAnimationKeypath): void;

    setFloatValueForKeypath(value: number, keypath: CompatibleAnimationKeypath): void;

    stop(): void;
}

declare const enum CompatibleBackgroundBehavior {
    Stop = 0,

    Pause = 1,

    PauseAndRestore = 2,

    ForceFinish = 3,

    ContinuePlaying = 4
}

declare class CompatibleDictionaryTextProvider extends NSObject {
    static alloc(): CompatibleDictionaryTextProvider; // inherited from NSObject

    static new(): CompatibleDictionaryTextProvider; // inherited from NSObject

    constructor(o: { values: NSDictionary<string, string> });

    initWithValues(values: NSDictionary<string, string>): this;
}

declare class CompatibleLottieLogger extends NSObject {
    static alloc(): CompatibleLottieLogger; // inherited from NSObject

    static new(): CompatibleLottieLogger; // inherited from NSObject

    static overrideLottieLogger(): void;
}

declare const enum CompatibleRenderingEngineOption {
    Shared = 0,

    DefaultEngine = 1,

    Automatic = 2,

    MainThread = 3,

    CoreAnimation = 4
}

declare class LottieAnimation extends NSObject {
    static alloc(): LottieAnimation; // inherited from NSObject

    static new(): LottieAnimation; // inherited from NSObject
}

declare class LottieAnimationLayer extends CALayer {
    static alloc(): LottieAnimationLayer; // inherited from NSObject

    static layer(): LottieAnimationLayer; // inherited from CALayer

    static new(): LottieAnimationLayer; // inherited from NSObject
}

declare class LottieAnimationView extends LottieAnimationViewBase {
    static alloc(): LottieAnimationView; // inherited from NSObject

    static appearance(): LottieAnimationView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): LottieAnimationView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(
        trait: UITraitCollection,
        ContainerClass: typeof NSObject
    ): LottieAnimationView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
        trait: UITraitCollection,
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): LottieAnimationView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LottieAnimationView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): LottieAnimationView; // inherited from UIAppearance

    static new(): LottieAnimationView; // inherited from NSObject
}

declare class LottieAnimationViewBase extends UIView {
    static alloc(): LottieAnimationViewBase; // inherited from NSObject

    static appearance(): LottieAnimationViewBase; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): LottieAnimationViewBase; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(
        trait: UITraitCollection,
        ContainerClass: typeof NSObject
    ): LottieAnimationViewBase; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
        trait: UITraitCollection,
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): LottieAnimationViewBase; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LottieAnimationViewBase; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(
        containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
    ): LottieAnimationViewBase; // inherited from UIAppearance

    static new(): LottieAnimationViewBase; // inherited from NSObject
}

declare let LottieVersionNumber: number;

declare let LottieVersionString: interop.Reference<number>;
