import { EventData, Observable } from "tns-core-modules/data/observable";
import { isIOS } from 'platform';

import { LottieView } from "./temp";

declare var com: any;

export class HelloWorldModel extends Observable {

    private _myLottie: LottieView;
    private animations: Array<string> = [
        "Mobilo/D.json",
        "Mobilo/A.json",
        "Mobilo/B.json",
        "Mobilo/N.json",
        "Mobilo/R.json",
        "Mobilo/S.json",
    ];
    private animationIndex: number = 0;

    public src;
    public loop;
    public autoPlay;

    constructor() {
        super();
        this.src = this.animations[this.animationIndex];
        this.loop = true;
        this.autoPlay = true;
    }

    public lottieLoaded(args) {
        try {
            this._myLottie = args.object;
            console.log(isIOS ? args.object.ios : args.object.android);
        } catch (error) {
            console.log(error);
        }
    }

    public next() {
        if (this.animationIndex >= this.animations.length) {
            this.animationIndex = 0;
        } else {
            this.animationIndex++;
        }
        this.src = this.animations[this.animationIndex];
    }

    public startOrStopAnimation() {
        if (this._myLottie.isAnimating()) {
            this._myLottie.cancelAnimation();
        } else {
            this._myLottie.playAnimation();
        }
    }
}