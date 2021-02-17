import { Color, Observable } from '@nativescript/core';
import { LottieView } from 'nativescript-lottie';

const ANDROID_WAVE_KEYPATHS = [
  ['Shirt', 'Group 5', 'Fill 1'],
  ['LeftArmWave', 'LeftArm', 'Group 6', 'Fill 1'],
  ['RightArm', 'Group 6', 'Fill 1']
];

export class DemoViewModel extends Observable {
  animationIndex: number = 0;
  animations: string[] = [
    'Mobilo/B',
    'res://Mobilo/R.json',
    'res://Mobilo/A',
    'res://Mobilo/D.json',
    'res://Mobilo/N.json',
    'res://Mobilo/S.json'
  ];
  thirdLottieProgressTo: string = 'Try it!';

  /**
   * For demoing cycling through the sample animations.
   */
  private _lottieViewOne: LottieView;

  /**
   * For demoing changing colors and opacity dynamically at runtime.
   */
  private _lottieViewTwo: LottieView;

  /**
   * For demoing partially animating a composition.
   */
  private _lottieViewThree: LottieView;

  /**
   * For demoing the completion block (i.e for async work).
   */
  private _lottieViewFour: LottieView;

  firstLottieLoaded(event) {
    this._lottieViewOne = event.object as LottieView;
    this._lottieViewOne.autoPlay = true;
    this._lottieViewOne.loop = true;
    this._lottieViewOne.src = this.animations[this.animationIndex];
    this._lottieViewOne.completionBlock = (animationFinished: boolean) => {
      console.log(`completionBlock animationFinished: ${animationFinished}`);
    };
  }

  secondLottieLoaded(event) {
    this._lottieViewTwo = event.object as LottieView;
    this._lottieViewTwo.autoPlay = true;
    this._lottieViewTwo.loop = true;
    this._lottieViewTwo.src = 'res://AndroidWave';
  }

  thirdLottieLoaded(event) {
    this._lottieViewThree = event.object as LottieView;
    this._lottieViewThree.autoPlay = false;
    this._lottieViewThree.loop = false;
    this._lottieViewThree.src = 'res://Mobilo/N';
  }

  fourthLottieLoaded(event) {
    this._lottieViewFour = event.object as LottieView;
    this._lottieViewFour.autoPlay = false;
    this._lottieViewFour.src = 'res://doughnut.json';
    this.setFourthLottieToLoadingState();
  }

  next() {
    this.animationIndex++;
    if (this.animationIndex >= this.animations.length) {
      this.animationIndex = 0;
    }
    this._lottieViewOne.src = this.animations[this.animationIndex];
  }

  toggleAnimation() {
    if (this._lottieViewOne.isAnimating()) {
      this._lottieViewOne.cancelAnimation();
    } else {
      this._lottieViewOne.playAnimation();
    }
  }

  toggleLoop() {
    this._lottieViewOne.loop = !this._lottieViewOne.loop;
  }

  setTheme = value => () => {
    const color = new Color(value);
    ANDROID_WAVE_KEYPATHS.forEach(keyPath => {
      this._lottieViewTwo.setColorValueDelegateForKeyPath(color, [...keyPath]);
    });
  }

  setSecondLottieRandomOpacity() {
    const opacity = getRandomWithPrecision(2);
    ANDROID_WAVE_KEYPATHS.forEach(keyPath => {
      this._lottieViewTwo.setOpacityValueDelegateForKeyPath(opacity, [
        ...keyPath
      ]);
    });
  }

  setThirdLottieRandomProgress() {
    const toProgress = getRandomWithPrecision(2);
    this.set('thirdLottieProgressTo', `Animated to ${toProgress}`);
    this._lottieViewThree.playAnimationFromProgressToProgress(0, toProgress);
  }

  setFourthLottieToLoadingState() {
    this._lottieViewFour.loop = true;
    this._lottieViewFour.playAnimationFromProgressToProgress(0, 0.5);
  }

  setFourthLottieToLoadedState() {
    this._lottieViewFour.completionBlock = (animationFinished: boolean) => {
      console.log(
        `lottieViewFour completionBlock animationFinished: ${animationFinished}`
      );

      this._lottieViewFour.playAnimationFromProgressToProgress(0.5, 0.85);
      this._lottieViewFour.completionBlock = null;
    };

    // Trigger the completion block by disabling looping and allowing the final loop to lapse.
    this._lottieViewFour.loop = false;
  }
}

function getRandomWithPrecision(precision?: number): number {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(Math.random() * multiplier) / multiplier;
}
