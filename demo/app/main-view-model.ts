import { EventData, Observable } from "tns-core-modules/data/observable";
import { isIOS } from "tns-core-modules/platform";
import { LottieView } from "nativescript-lottie";

export class HelloWorldModel extends Observable {
  private _myLottie: LottieView;
  private animations: string[];
  private animationIndex: number = 0;

  public src: string;
  public loop: boolean;
  public autoPlay: boolean;

  constructor() {
    super();
    this.animations = [
      "Mobilo/B.json",
      "Mobilo/A.json",
      "Mobilo/D.json",
      "Mobilo/N.json",
      "Mobilo/R.json",
      "Mobilo/S.json"
    ];
    // set the initial src and props for the LottieView
    this.src = this.animations[this.animationIndex];
    this.loop = true;
    this.autoPlay = true;
  }

  public lottieLoaded(args) {
    try {
      this._myLottie = args.object as LottieView;
      console.log(isIOS ? args.object.ios : args.object.android);
    } catch (error) {
      console.log(error);
    }
  }

  public next() {
    this.animationIndex++;
    if (this.animationIndex >= this.animations.length) {
      this.animationIndex = 0;
    }
    // set the src directly, propertyChange events are not wired up on the component yet
    this._myLottie.src = this.animations[this.animationIndex];
  }

  public startOrStopAnimation() {
    if (this._myLottie.isAnimating()) {
      this._myLottie.cancelAnimation();
    } else {
      this._myLottie.playAnimation();
    }
  }

  public toggleLoop() {
    this._myLottie.loop = !this._myLottie.loop;
  }
}
