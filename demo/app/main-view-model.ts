import { Observable } from 'data/observable';
declare var com: any;
import * as app from "application";
import * as fs from "file-system";

let appPath = fs.knownFolders.currentApp().path;

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    } 

    public onTap() {
        this._counter--;
        this.updateMessage();

        try {
            console.log(com.airbnb.lottie.LottieAnimationView);
            let x = new com.airbnb.lottie.LottieAnimationView(app.android.context);
            console.log(x);
            // console.dump(x);


            // let src = appPath + (this._source.indexOf("/") === 0 ? "" : "/") + this._source;
            // if (!fs.File.exists(src)) {
            //     console.log("Keyframe source not found at " + src + "; showing an empty image");
            //     return;
            // }


            x.setAnimation("~/lottie-samples/pinjump.json");
            x.loop(true);
        } catch (error) {
            console.log(error);
        }
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}