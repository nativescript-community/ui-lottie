import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { LottieView } from 'nativescript-lottie';

registerElement('LottieView', () => LottieView);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    public loop: boolean = true;
    public src: string = "Mobilo/D.json";
    private _lottieView: LottieView;

    
    constructor() { }

    lottieViewLoaded(event) {
        this._lottieView = <LottieView>event.object
        console.log('lottieLoaded');
        console.dir(this._lottieView.android);
    }
}
