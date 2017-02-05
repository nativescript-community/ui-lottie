import { Observable } from "data/observable";
import { Page } from "ui/page";
import * as app from "application";
import { isIOS } from 'platform';
import { LottieView } from "nativescript-lottie";

declare var com: any;

export class HelloWorldModel extends Observable {

    private _myLottie: LottieView;
    private _page: Page;

    constructor(page: Page) {
        super();
        this._page = page;
        this._myLottie = <LottieView>this._page.getViewById('pinjump');
        console.log('this._myLottie:', this._myLottie);
    }

    public lottieLoaded(args) {
        console.log('lottieLoaded');
        try {
            this._myLottie = args.object;
            console.log(isIOS ? args.object.ios : args.object.android);
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