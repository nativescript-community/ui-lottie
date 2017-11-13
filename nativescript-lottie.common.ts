/**********************************************************************************
* (c) 2017, Nathan Walker.
* Licensed under the MIT license.
*
* Version 1.0.0                                           walkerrunpdx@gmail.com
**********************************************************************************/
"use strict";

import { View } from "tns-core-modules/ui/core/view";
import { Property } from "tns-core-modules/ui/core/properties";
import { CacheStrategy } from "./nativescript-lottie.android";

export class LottieViewBase extends View {
    public src: string;
    public loop: boolean;
    public autoPlay: boolean;
    public cacheStrategy: CacheStrategy;
}

export const srcProperty = new Property<LottieViewBase, string>({
    name: "src"
});

srcProperty.register(LottieViewBase);

export const loopProperty = new Property<LottieViewBase, boolean>({
    name: "loop"
});

loopProperty.register(LottieViewBase);

export const autoPlayProperty = new Property<LottieViewBase, boolean>({
    name: "autoPlay"
});

autoPlayProperty.register(LottieViewBase);

export const cacheStrategyProperty = new Property<LottieViewBase, CacheStrategy>({
    name: "cacheStrategy"
});

cacheStrategyProperty.register(LottieViewBase);


