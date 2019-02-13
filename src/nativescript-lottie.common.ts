/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/

import { View, booleanConverter } from 'tns-core-modules/ui/core/view';
import { Property } from 'tns-core-modules/ui/core/properties';
import { CacheStrategy } from './nativescript-lottie.android';
import { SrcMode } from './src-mode';

export class LottieViewBase extends View {
  public src: string;
  public srcMode: SrcMode = SrcMode.File;
  public loop: boolean;
  public autoPlay: boolean;
  public cacheStrategy: CacheStrategy;
  public completionBlock: (animationFinished: boolean) => void;
}

export const srcProperty = new Property<LottieViewBase, string>({
  name: 'src'
});

srcProperty.register(LottieViewBase);

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

export const cacheStrategyProperty = new Property<
  LottieViewBase,
  CacheStrategy
>({
  name: 'cacheStrategy'
});

cacheStrategyProperty.register(LottieViewBase);
