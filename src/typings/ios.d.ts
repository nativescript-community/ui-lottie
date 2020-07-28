
declare class AnimatedButton extends AnimatedControl {

	static alloc(): AnimatedButton; // inherited from NSObject

	static appearance(): AnimatedButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnimatedButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnimatedButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimatedButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimatedButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimatedButton; // inherited from UIAppearance

	static new(): AnimatedButton; // inherited from NSObject
}

declare class AnimatedControl extends UIControl {

	static alloc(): AnimatedControl; // inherited from NSObject

	static appearance(): AnimatedControl; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnimatedControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnimatedControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimatedControl; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimatedControl; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimatedControl; // inherited from UIAppearance

	static new(): AnimatedControl; // inherited from NSObject
}

declare class AnimatedSwitch extends AnimatedControl {

	static alloc(): AnimatedSwitch; // inherited from NSObject

	static appearance(): AnimatedSwitch; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnimatedSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnimatedSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimatedSwitch; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimatedSwitch; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimatedSwitch; // inherited from UIAppearance

	static new(): AnimatedSwitch; // inherited from NSObject
}

declare class AnimationSubview extends UIView {

	static alloc(): AnimationSubview; // inherited from NSObject

	static appearance(): AnimationSubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnimationSubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnimationSubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimationSubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimationSubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimationSubview; // inherited from UIAppearance

	static new(): AnimationSubview; // inherited from NSObject
}

declare class AnimationView extends LottieView {

	static alloc(): AnimationView; // inherited from NSObject

	static appearance(): AnimationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnimationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnimationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnimationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AnimationView; // inherited from UIAppearance

	static new(): AnimationView; // inherited from NSObject
}

declare class CompatibleAnimation extends NSObject {

	static alloc(): CompatibleAnimation; // inherited from NSObject

	static new(): CompatibleAnimation; // inherited from NSObject

	constructor(o: { filepath: string; });

	constructor(o: { json: string; });

	constructor(o: { name: string; bundle: NSBundle; });

	initWithFilepath(filepath: string): this;

	initWithJson(json: string): this;

	initWithNameBundle(name: string, bundle: NSBundle): this;
}

declare class CompatibleAnimationKeypath extends NSObject {

	static alloc(): CompatibleAnimationKeypath; // inherited from NSObject

	static new(): CompatibleAnimationKeypath; // inherited from NSObject

	constructor(o: { keypath: string; });

	constructor(o: { keys: NSArray<string> | string[]; });

	initWithKeypath(keypath: string): this;

	initWithKeys(keys: NSArray<string> | string[]): this;
}

declare class CompatibleAnimationView extends UIView {

	static alloc(): CompatibleAnimationView; // inherited from NSObject

	static appearance(): CompatibleAnimationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CompatibleAnimationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CompatibleAnimationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CompatibleAnimationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CompatibleAnimationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CompatibleAnimationView; // inherited from UIAppearance

	static new(): CompatibleAnimationView; // inherited from NSObject

	readonly animationDuration: number;

	animationSpeed: number;

	compatibleAnimation: CompatibleAnimation;

	currentFrame: number;

	currentProgress: number;

	currentTime: number;

	readonly isAnimationPlaying: boolean;

	loopAnimationCount: number;

	readonly realtimeAnimationFrame: number;

	readonly realtimeAnimationProgress: number;

	respectAnimationFrameRate: boolean;

	shouldRasterizeWhenIdle: boolean;

	addSubviewForLayerAt(subview: AnimationSubview, keypath: CompatibleAnimationKeypath): void;

	convertWithPointToLayerAt(point: CGPoint, keypath: CompatibleAnimationKeypath): CGPoint;

	convertWithRectToLayerAt(rect: CGRect, keypath: CompatibleAnimationKeypath): CGRect;

	forceDisplayUpdate(): void;

	frameTimeForMarker(named: string): number;

	getColorValueForAtFrame(keypath: CompatibleAnimationKeypath, atFrame: number): UIColor;

	getFloatValueForAtFrame(keypath: CompatibleAnimationKeypath, atFrame: number): number;

	getValueForAtFrame(keypath: CompatibleAnimationKeypath, atFrame: number): any;

	logHierarchyKeypaths(): void;

	pause(): void;

	play(): void;

	playFromFrameToFrameCompletion(fromFrame: number, toFrame: number, completion: (p1: boolean) => void): void;

	playFromMarkerToMarkerCompletion(fromMarker: string, toMarker: string, completion: (p1: boolean) => void): void;

	playFromProgressToProgressCompletion(fromProgress: number, toProgress: number, completion: (p1: boolean) => void): void;

	playWithCompletion(completion: (p1: boolean) => void): void;

	progressTimeForMarker(named: string): number;

	reloadImages(): void;

	setColorValueForKeypath(color: UIColor, keypath: CompatibleAnimationKeypath): void;

	setFloatValueForKeypath(value: number, keypath: CompatibleAnimationKeypath): void;

	stop(): void;
}

declare var LottieVersionNumber: number;

declare var LottieVersionString: interop.Reference<number>;

declare class LottieView extends UIView {

	static alloc(): LottieView; // inherited from NSObject

	static appearance(): LottieView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): LottieView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LottieView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LottieView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LottieView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LottieView; // inherited from UIAppearance

	static new(): LottieView; // inherited from NSObject
}
