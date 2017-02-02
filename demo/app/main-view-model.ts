import { Observable } from 'data/observable';
declare var com: any;
import * as app from "application";
import * as fs from "file-system";

let appPath = fs.knownFolders.currentApp().path;

export class HelloWorldModel extends Observable {

    constructor() {
        super();
    }


    public createLottie(args) {
        try {
            let x = new com.airbnb.lottie.LottieAnimationView(app.android.context);
            x.setAnimation("pinjump.json");
            x.loop(true);
            x.playAnimation();

            args.view = x;
        } catch (error) {
            console.log(error);
        }
    }

    public createLottie2(args) {
        try {
            let x = new com.airbnb.lottie.LottieAnimationView(app.android.context);
            x.setAnimation("lottielogo2.json");
            x.loop(true);
            x.playAnimation();

            args.view = x;
        } catch (error) {
            console.log(error);
        }
    }

    public createLottie3(args) {
        try {
            let x = new com.airbnb.lottie.LottieAnimationView(app.android.context);
            x.setAnimation("motioncorpse.json");
            x.loop(true);
            x.playAnimation();

            args.view = x;
        } catch (error) {
            console.log(error);
        }
    }

    public onTap() {
        try {
            console.log(com.airbnb.lottie.LottieAnimationView);
            let x = new com.airbnb.lottie.LottieAnimationView(app.android.context);
            console.log(x);

            x.setAnimation("pinjump.json");
            x.loop(true);
        } catch (error) {
            console.log(error);
        }
    }

}