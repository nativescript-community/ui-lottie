import { EventData, Observable } from "tns-core-modules/data/observable";
import { isIOS } from 'platform';

import { LottieView } from "./temp";

declare var com: any;

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
            "Mobilo/D.json",
            "Mobilo/A.json",
            "Mobilo/B.json",
            "Mobilo/N.json",
            "Mobilo/R.json",
            "Mobilo/S.json"
        ];
        this.src = this.animations[this.animationIndex];
        this.loop = true;
        this.autoPlay = true;
    }

    public lottieLoaded(args) {
        try {
            this._myLottie = <LottieView>args.object;
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
        this.src = this.animations[this.animationIndex];
    }

    public startOrStopAnimation() {
        if (this._myLottie.isAnimating()) {
            this._myLottie.cancelAnimation();
        } else {
            this._myLottie.playAnimation();
        }
    }

    public stopLoop() {
        this.loop = !this.loop;
    }
}