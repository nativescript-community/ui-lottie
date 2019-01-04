import { Component } from '@angular/core';
import { registerElement } from 'nativescript-angular';
import { LottieView } from 'nativescript-lottie';
import { Color } from 'tns-core-modules/color/color';

registerElement('LottieView', () => LottieView);

const ANDROID_WAVE_KEYPATHS = [
  ['Shirt', 'Group 5', 'Fill 1'],
  ['LeftArmWave', 'LeftArm', 'Group 6', 'Fill 1'],
  ['RightArm', 'Group 6', 'Fill 1']
];

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  moduleId: module.id
})
export class HomeComponent {

  public animationIndex: number = 0;
  public animations: Array<string> = [
    'Mobilo/B.json',
    'Mobilo/A.json',
    'Mobilo/D.json',
    'Mobilo/N.json',
    'Mobilo/R.json',
    'Mobilo/S.json'
  ];
  public thirdLottieProgressTo: string = 'Try it!';

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

  public firstLottieLoaded(event) {
    this._lottieViewOne = <LottieView>event.object;
    this._lottieViewOne.autoPlay = true;
    this._lottieViewOne.loop = true;
    this._lottieViewOne.src = this.animations[this.animationIndex];
    this._lottieViewOne.completionBlock = (animationFinished: boolean) => {
      console.log(`lottieViewOne completionBlock animationFinished: ${animationFinished}`);
    };
  }

  public secondLottieLoaded(event) {
    this._lottieViewTwo = <LottieView>event.object;
    this._lottieViewTwo.autoPlay = true;
    this._lottieViewTwo.loop = true;
    this._lottieViewTwo.src = 'AndroidWave.json';
  }

  public thirdLottieLoaded(event) {
    this._lottieViewThree = <LottieView>event.object;
    this._lottieViewThree.autoPlay = false;
    this._lottieViewThree.loop = false;
    this._lottieViewThree.src = 'Mobilo/N.json';
  }

  public next() {
    this.animationIndex++;
    if (this.animationIndex >= this.animations.length) {
      this.animationIndex = 0;
    }
    this._lottieViewOne.src = this.animations[this.animationIndex];
  }

  public toggleAnimation() {
    if (this._lottieViewOne.isAnimating()) {
      this._lottieViewOne.cancelAnimation();
    } else {
      this._lottieViewOne.playAnimation();
    }
  }

  public toggleLoop() {
    this._lottieViewOne.loop = !this._lottieViewOne.loop;
  }

  public setTheme(value) {
    const color = new Color(value);
    ANDROID_WAVE_KEYPATHS.forEach((keyPath) => {
      this._lottieViewTwo.setColorValueDelegateForKeyPath(color, [...keyPath]);
    });
  }

  public setSecondLottieRandomOpacity() {
    const opacity = getRandomWithPrecision(2);
    ANDROID_WAVE_KEYPATHS.forEach((keyPath) => {
      this._lottieViewTwo.setOpacityValueDelegateForKeyPath(opacity, [...keyPath]);
    });
  }

  public setThirdLottieRandomProgress() {
    const toProgress = getRandomWithPrecision(2)
    this.thirdLottieProgressTo = `Animated to ${toProgress}`;
    this._lottieViewThree.playAnimationFromProgressToProgress(0, toProgress);
  }
}

function getRandomWithPrecision(precision?: number): number {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(Math.random() * multiplier) / multiplier;
}
