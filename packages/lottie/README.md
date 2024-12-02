<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      DO NOT EDIT THIS READEME DIRECTLY! Edit "bluesprint.md" instead.
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<h1 align="center">@nativescript-community/ui-lottie</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@nativescript-community/ui-lottie?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@nativescript-community/ui-lottie.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@nativescript-community/ui-lottie"><img alt="NPM Version" src="https://img.shields.io/npm/v/@nativescript-community/ui-lottie.svg" height="20"/></a>
	</p>

<p align="center">
  <b>NativeScript plugin to expose AirBnB Lottie library</b></br>
  <sub><sub>
</p>

<br />


| <img src="https://raw.githubusercontent.com/nativescript-community/ui-lottie/master/screens/lottieDemo.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |


[](#table-of-contents)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
	* [NativeScript (Core)](#nativescript-core)
		* [XML](#xml)
		* [TS](#ts)
	* [NativeScript Angular](#nativescript-angular)
		* [Module](#module)
		* [XML](#xml-1)
		* [Component](#component)
* [NativeScript Vue](#nativescript-vue)
	* [Bootstrap](#bootstrap)
	* [Component](#component-1)
* [Assets](#assets)
	* [Android](#android)
	* [iOS](#ios)
* [Properties (bindable)](#properties-bindable)
* [Properties](#properties)
* [Methods](#methods)
* [Contributors](#contributors)
* [Demos and Development](#demos-and-development)
	* [Repo Setup](#repo-setup)
	* [Build](#build)
	* [Demos](#demos)
* [Contributing](#contributing)
	* [Update repo ](#update-repo-)
	* [Update readme ](#update-readme-)
	* [Update doc ](#update-doc-)
	* [Publish](#publish)
	* [modifying submodules](#modifying-submodules)
* [Questions](#questions)


[](#installation)

## Installation
Run the following command from the root of your project:

`ns plugin add @nativescript-community/ui-lottie`


[](#usage)

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


[](#nativescript-vue)

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


[](#assets)

## Assets

:fire: You can find animations in the `sample-effects` folder.

### Android

Place your animation files in the NS app's `app/App_Resources/Android/src/main/assets` folder.

Note: In a nativescript-vue project the above folder may not exist. Place the files in `platforms/android/app/src/main/assets`.

### iOS

Place your animations files in your `app/App_Resources/iOS/` folder.


[](#properties-bindable)

## Properties (bindable)

| Property   | Type      | Default | Description                                   |
| ---------- | --------- | ------- | --------------------------------------------- |
| `autoPlay` | `boolean` | `false` | Start LottieView animation on load if `true`. |
| `loop`     | `boolean` | `false` | Loop continuously animation if `true`.        |
| `src`      | `string`  | `null`  | Animation path to `.json` file.               |


[](#properties)

## Properties

| Property          | Type                | Default | Description                                                                                                                                               |
| ----------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `completionBlock` | `(boolean) => void` | `null`  | Completion block to be executed upon completion of the animation. The animation is considered complete when it finishes playing and is no longer looping. |
| `duration`        | `number`            | `null`  | Get the duration of the animation.                                                                                                                        |
| `progress`        | `number`            | `0`     | Get/set the progress of the animation.                                                                                                                    |
| `speed`           | `number`            | `1`     | Get/set the speed of the animation.                                                                                                                       |


[](#methods)

## Methods

| Method                                | Return    | Parameters                 | Description                                                                                                             |
| ------------------------------------- | --------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `cancelAnimation`                     | `void`    | None                       | Pauses the animation for the LottieView instance.                                                                       |
| `isAnimating`                         | `boolean` | None                       | Returns true if the LottieView is animating, else false.                                                                |
| `playAnimation`                       | `void`    | None                       | Plays the animation for the LottieView instance.                                                                        |
| `playAnimationFromProgressToProgress` | `void`    | startProgress, endProgress | Plays the animation for the LottieView instance from the specified start and end progress values (between 0 and 1).     |
| `setColor`     | `void`    | value, keyPath             | Sets the provided color value on each property that matches the specified keyPath in the LottieView instance.           |
| `setOpacity`   | `void`    | value, keyPath             | Sets the provided opacity value (0 - 1) on each property that matches the specified keyPath in the LottieView instance. |


[](#contributors)

## Contributors

| [<img alt="Brad Martin" src="https://avatars0.githubusercontent.com/u/6006148?s=400&v=4" width="117">](https://github.com/bradmartin) | [<img alt="Nathan Walker" src="https://avatars0.githubusercontent.com/u/457187?s=400&v=4" width="117">](https://github.com/NathanWalker/) | [<img alt="Jean-Baptiste Aniel" src="https://avatars3.githubusercontent.com/u/9477179?s=460&v=4" width="117">](https://github.com/rhanb) | [<img alt="HamdiWanis" src="https://avatars3.githubusercontent.com/u/11708544?s=460&v=4" width="117">](https://github.com/hamdiwanis) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
|                                              [bradmartin](https://github.com/bradmartin)                                              |                                              [NathanWalker](https://github.com/NathanWalker)                                              |                                                    [rhanb](https://github.com/rhanb)                                                     |                                              [HamdiWanis](https://github.com/hamdiwanis)                                              |

| [<img alt="itstheceo" src="https://avatars2.githubusercontent.com/u/5218201?s=460&v=4" width="117">](https://github.com/itstheceo) | [<img alt="itstheceo" src="https://avatars2.githubusercontent.com/u/32623552?s=460&v=4" width="117">](https://github.com/mudlabs) |
| :--------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|                                             [itstheceo](https://github.com/itstheceo)                                              |                                               [mudlabs](https://github.com/mudlabs)                                               |



[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```


[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).
