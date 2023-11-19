/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/

import { CoreTypes, Property, View, booleanConverter } from '@nativescript/core';

export class LottieViewBase extends View {
    public stretch: CoreTypes.ImageStretchType;
    public async: boolean;
    public src: string;
    public loop: boolean;
    public autoPlay: boolean;
    public progress: number;
    public completionBlock: (animationFinished: boolean) => void;
}

export const srcProperty = new Property<LottieViewBase, string>({
    name: 'src'
});
srcProperty.register(LottieViewBase);

export const asyncProperty = new Property<LottieViewBase, boolean>({
    name: 'async',
    defaultValue: false,
    valueConverter: booleanConverter
});
asyncProperty.register(LottieViewBase);
export const loopProperty = new Property<LottieViewBase, boolean>({
    name: 'loop',
    defaultValue: false,
    valueConverter: booleanConverter
});
loopProperty.register(LottieViewBase);

export const autoPlayProperty = new Property<LottieViewBase, boolean>({
    name: 'autoPlay',
    defaultValue: false,
    valueConverter: booleanConverter
});
autoPlayProperty.register(LottieViewBase);

export const renderModeProperty = new Property<LottieViewBase, number>({
    name: 'renderMode'
});
renderModeProperty.register(LottieViewBase);

export const progressProperty = new Property<LottieViewBase, number>({
    name: 'progress'
});
progressProperty.register(LottieViewBase);

export const stretchProperty = new Property<LottieViewBase, CoreTypes.ImageStretchType>({
    name: 'stretch',
    defaultValue: 'aspectFit',
    affectsLayout: global.isIOS
});
stretchProperty.register(LottieViewBase);
