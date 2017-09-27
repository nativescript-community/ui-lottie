import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { LottieView } from './temp';

registerElement('LottieView', () => LottieView);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    public loop: boolean = true;
    public src: string = "Mobilo/B.json";
    private _lottieView: LottieView;

    constructor() {
        this.loop = true;
        this.src = "Mobilo/B.json";
    }

    lottieViewLoaded(event) {
        this._lottieView = <LottieView>event.object
        console.log('lottieLoaded');
    }
 }
