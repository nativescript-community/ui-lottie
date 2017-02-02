import { Observable } from "data/observable";
import * as app from "application";
import { LottieView } from "nativescript-lottie";

declare var com: any;

export class HelloWorldModel extends Observable {

    private _myLottie: LottieView;

    constructor() {
        super();
    }

    public lottieLoaded(args) {
        try {
            this._myLottie = args.object;
            console.log(args.object.android);
        } catch (error) {
            console.log(error);
        }
    }

    public startLottie() {
        this._myLottie.playAnimation();
    }

    public stopLottie() {
        this._myLottie.cancelAnimation();
    }


}