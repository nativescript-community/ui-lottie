<a align="center" href="https://www.npmjs.com/package/nativescript-community/ui-lottie">
    <h2 align="center">nativescript-community/ui-lottie</h2>
</a>
<h4 align="center">NativeScript plugin to expose Airbnb Lottie for awesome animations.</h4>

<p align="center">
 <a href="https://www.npmjs.com/package/nativescript-community/ui-lottie">
        <img src="https://img.shields.io/npm/v/nativescript-community/ui-lottie.svg" alt="npm">
    </a>
    <a href="https://www.npmjs.com/package/@nativescript-community/ui-lottie">
        <img src="https://img.shields.io/npm/dt/@nativescript-community/ui-lottie.svg?label=npm%20downloads" alt="npm">
    </a>
     <a href="https://github.com/nativescript-community/ui-lottie/actions">
        <img src="https://github.com/nativescript-community/ui-lottie/workflows/Build%20CI/badge.svg" alt="Action Build">
    </a>
    <a href="https://github.com/nativescript-community/ui-lottie/stargazers">
        <img src="https://img.shields.io/github/stars/nativescript-community/ui-lottie.svg" alt="stars">
    </a>
    <a href="https://paypal.me/bradwayne88">
        <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="donate">
    </a>
</p>

## Changelog

All notable changes to this project will be documented in the [changelog](CHANGELOG.md).

## Demo Screen

_The .gif does not do the fluid animations justice_

![LottieView](screens/lottieDemo.gif)

## Installation

To install execute:

```
tns plugin add @nativescript-community/ui-lottie
```

## Usage

### NativeScript (Core)

#### XML

```xml
<Page
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:Lottie="@nativescript-community/ui-lottie" navigatingTo="navigatingTo" class="page">
    <StackLayout>
        <Lottie:LottieView src="PinJump.json" height="130" loop="true" autoPlay="true" loaded="yourLoadedEvent" />
    </StackLayout>
</Page>
```

#### TS

```typescript
import { LottieView } from "@nativescript-community/ui-lottie";

public yourLoadedEvent(args) {
    this._myLottie = args.object as LottieView; /// this is the instance of the LottieAnimationView
}
```

---

### NativeScript Angular

#### Module

First you need to include the `NativeScriptLottieModule` in your `app.module.ts`

```typescript
import { NativeScriptLottieModule} from '@nativescript-community/ui-lottie/angular';

@NgModule({
    imports: [
        NativeScriptLottieModule
    ],
    ...
})
```

#### XML

```xml
<StackLayout>
    <LottieView width="100" height="150" [src]="src" [loop]="loop" [autoPlay]="autoPlay" (loaded)="lottieViewLoaded($event)">     </LottieView>
</StackLayout>
```

#### Component

```typescript
import { Component } from '@angular/core';
import { LottieView } from '@nativescript-community/ui-lottie';

@Component({
  templateUrl: 'home.component.html',
  moduleId: module.id
})
export class HomeComponent {
  public loop: boolean = true;
  public src: string;
  public autoPlay: boolean = true;
  public animations: Array<string>;

  private _lottieView: LottieView;

  constructor() {
    this.animations = [
      'Mobilo/A.json',
      'Mobilo/D.json',
      'Mobilo/N.json',
      'Mobilo/S.json'
    ];
    this.src = this.animations[0];
  }

  lottieViewLoaded(event) {
    this._lottieView = <LottieView>event.object;
  }
}
```

---

## NativeScript Vue

### Bootstrap

If you want to use this plugin with Vue, do this in your `app.js` or `main.js`:

```javascript
import LottieView from '@nativescript-community/ui-lottie/vue';

Vue.use(LottieView);
```

This will install and register `LottieView` component to your `Vue` instance and now you can use the plugin.

### Component

```xml
<template>
    <Page class="page">
        <StackLayout>
            <LottieView height="130" src="PinJump.json" :loop="true" :autoPlay="true" @loaded="lottieViewLoaded"></LottieView>
        </StackLayout>
    </page
</template>

<script>
    export default {
        methods: {
            lottieViewLoaded(args) {
                this._lottieView = args.object;
            },
        },
        data() {
            return {
                _lottieView: null,
            }
        }
    };
</script>
```

---

## Assets

:fire: You can find animations in the `sample-effects` folder.

### Android

Place your animation files in the NS app's `app/App_Resources/Android/src/main/assets` folder.

Note: In a nativescript-vue project the above folder may not exist. Place the files in `platforms/android/app/src/main/assets`.

### iOS

Place your animations files in your `app/App_Resources/iOS/` folder.

## Properties (bindable)

| Property   | Type      | Default | Description                                   |
| ---------- | --------- | ------- | --------------------------------------------- |
| `autoPlay` | `boolean` | `false` | Start LottieView animation on load if `true`. |
| `loop`     | `boolean` | `false` | Loop continuously animation if `true`.        |
| `src`      | `string`  | `null`  | Animation path to `.json` file.               |

## Properties

| Property          | Type                | Default | Description                                                                                                                                               |
| ----------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `completionBlock` | `(boolean) => void` | `null`  | Completion block to be executed upon completion of the animation. The animation is considered complete when it finishes playing and is no longer looping. |
| `duration`        | `number`            | `null`  | Get the duration of the animation.                                                                                                                        |
| `progress`        | `number`            | `0`     | Get/set the progress of the animation.                                                                                                                    |
| `speed`           | `number`            | `1`     | Get/set the speed of the animation.                                                                                                                       |

## Methods

| Method                                | Return    | Parameters                 | Description                                                                                                             |
| ------------------------------------- | --------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `cancelAnimation`                     | `void`    | None                       | Pauses the animation for the LottieView instance.                                                                       |
| `isAnimating`                         | `boolean` | None                       | Returns true if the LottieView is animating, else false.                                                                |
| `playAnimation`                       | `void`    | None                       | Plays the animation for the LottieView instance.                                                                        |
| `playAnimationFromProgressToProgress` | `void`    | startProgress, endProgress | Plays the animation for the LottieView instance from the specified start and end progress values (between 0 and 1).     |
| `setColorValueDelegateForKeyPath`     | `void`    | value, keyPath             | Sets the provided color value on each property that matches the specified keyPath in the LottieView instance.           |
| `setOpacityValueDelegateForKeyPath`   | `void`    | value, keyPath             | Sets the provided opacity value (0 - 1) on each property that matches the specified keyPath in the LottieView instance. |

## Contributors

| [<img alt="Brad Martin" src="https://avatars0.githubusercontent.com/u/6006148?s=400&v=4" width="117">](https://github.com/bradmartin) | [<img alt="Nathan Walker" src="https://avatars0.githubusercontent.com/u/457187?s=400&v=4" width="117">](https://github.com/NathanWalker/) | [<img alt="Jean-Baptiste Aniel" src="https://avatars3.githubusercontent.com/u/9477179?s=460&v=4" width="117">](https://github.com/rhanb) | [<img alt="HamdiWanis" src="https://avatars3.githubusercontent.com/u/11708544?s=460&v=4" width="117">](https://github.com/hamdiwanis) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
|                                              [bradmartin](https://github.com/bradmartin)                                              |                                              [NathanWalker](https://github.com/NathanWalker)                                              |                                                    [rhanb](https://github.com/rhanb)                                                     |                                              [HamdiWanis](https://github.com/hamdiwanis)                                              |

| [<img alt="itstheceo" src="https://avatars2.githubusercontent.com/u/5218201?s=460&v=4" width="117">](https://github.com/itstheceo) | [<img alt="itstheceo" src="https://avatars2.githubusercontent.com/u/32623552?s=460&v=4" width="117">](https://github.com/mudlabs) |
| :--------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|                                             [itstheceo](https://github.com/itstheceo)                                              |                                               [mudlabs](https://github.com/mudlabs)                                               |
