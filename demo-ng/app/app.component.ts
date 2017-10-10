import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { LottieView } from './temp';


registerElement('LottieView', () => LottieView);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    public animationIndex: number = 0;
    public loop: boolean = true;
    public src: string;
    public autoPlay: boolean = true;
    public animations: Array<string>;

    private _lottieView: LottieView;


    constructor() {
        this.src = "HamburgerArrow.json";
        this.animations = [
            "EmptyState.json"
        ]
    }

    next() {
        console.log("next");
        this.animationIndex++;
        // if (this.animationIndex >= this.animations.length) {
        //     this.animationIndex = 0;
        // } else {
        //     this.src = this.animations[this.animationIndex];
        // }
        this.src = "EmptyState.json";
    }

    lottieViewLoaded(event) {
        this._lottieView = <LottieView>event.object;
    }

}
