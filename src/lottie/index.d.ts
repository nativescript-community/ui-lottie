import { Color, View } from '@nativescript/core';

export enum RenderMode {
    AUTOMATIC,
    HARDWARE,
    SOFTWARE
}

export interface KeyPathColors {
    [k: string]: Color | string;
}

export class LottieView extends View {
    /**
     * LottieAnimationView
     */
    readonly android: any;

    /**
     * AnimationView
     */
    readonly ios: any;

    constructor();

    /**
     * Flag determining whether the animation should start playing as soon as the view is ready.
     */
    autoPlay: boolean;

    /**
     * Block to be executed upon completion of the animation.
     * The animation is considered complete when it finishes playing and is no longer looping.
     */
    completionBlock: (animationFinished: boolean) => void;

    /**
     * (iOS only) The current UIViewContentMode.
     */
    contentMode: any;

    /**
     * The duration of the animation.
     */
    readonly duration: number | undefined;

    /**
     * Flag determining whether the animation should loop or not.
     */
    loop: boolean;

    /**
     * The current progress of the animation.
     */
    progress: number | undefined;

    /**
     * The current speed of the animation.
     */
    speed: number | undefined;

    /**
     * The current source of the animation.
     */
    src: string | undefined;

    /**
     * (Android) Cancels the animation.
     *
     * (iOS) Pauses the animation.
     */
    cancelAnimation(): void;

    /**
     * Returns true if the view is currently animating.
     */
    isAnimating(): boolean;

    /**
     * Sets the provided color value on each property that matches the specified keyPath.
     */
    setColor(value: Color, keyPath: string[]): void;

    /**
     * Sets the provided opacity value on each property that matches the specified keyPath.
     */
    setOpacity(value: number, keyPath: string[]): void;

    /**
     * Plays the animation from the beginning.
     */
    playAnimation(): void;

    /**
     * Plays the animation from the specified start and end progress values (between 0 and 1).
     */
    playAnimationFromProgressToProgress(startProgress: number, endProgress: number): void;
}
