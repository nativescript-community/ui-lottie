import { Observable } from 'tns-core-modules/data/observable';
import { LottieView } from 'nativescript-lottie';
import { Color } from 'tns-core-modules/color/color';

export class DemoViewModel extends Observable {
  
  public animationIndex: number = 0;
  public animations: string[] = [
    'Mobilo/B.json',
    'Mobilo/A.json',
    'Mobilo/D.json',
    'Mobilo/N.json',
    'Mobilo/R.json',
    'Mobilo/S.json'
  ];

  /**
   * For demoing cycling through the sample animations.
   */
  private _lottieViewOne: LottieView;

  /**
   * For demoing changing colors dynamically at runtime.
   */
  private _lottieViewTwo: LottieView;

  public firstLottieLoaded(event) {
    this._lottieViewOne = event.object as LottieView;
    this._lottieViewOne.autoPlay = true;
    this._lottieViewOne.loop = true;
    this._lottieViewOne.src = this.animations[this.animationIndex];
    this._lottieViewOne.completionBlock = (animationFinished: boolean) => {
      console.log(`completionBlock animationFinished: ${animationFinished}`);
    };
  }

  public secondLottieLoaded(event) {
    this._lottieViewTwo = event.object as LottieView;
    this._lottieViewTwo.autoPlay = true;
    this._lottieViewTwo.loop = true;
    this._lottieViewTwo.src = 'AndroidWave.json';
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

  // // TODO: get slider working
  // public onSliderChange(event) {
  //   const slider = event.object as Slider;
  //   this._lottieViewOne.progress = slider.value;
  // }

  public setTheme = value => () => {
    const color = new Color(value);
    const keyPaths = [
      ['Shirt', 'Group 5', 'Fill 1'],
      ['LeftArmWave', 'LeftArm', 'Group 6', 'Fill 1'],
      ['RightArm', 'Group 6', 'Fill 1']
    ];
    keyPaths.forEach((keyPath) => {
      this._lottieViewTwo.setColorValueDelegateForKeyPath(color, keyPath);
    });
  };

}
