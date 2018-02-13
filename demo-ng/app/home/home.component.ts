import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { LottieView } from 'nativescript-lottie';
import { Slider } from "tns-core-modules/ui/slider/slider";

registerElement('LottieView', () => LottieView);

@Component({
    selector: "ns-home",
    templateUrl: "home.component.html",
    moduleId: module.id
})

export class HomeComponent {
    public animationIndex: number = 0;
    public loop: boolean = true;
    public src: string;
    public autoPlay: boolean = true;
    public maxProgress: number;
    public animations: Array<string>;

    private _lottieView: LottieView;


    constructor() {
        this.animations = [
            "Mobilo/A.json",
            "Mobilo/D.json",
            "Mobilo/N.json",
            "Mobilo/S.json"
        ];
        this.src = this.animations[this.animationIndex];
    }

    next() {
        this.animationIndex++;
        if (this.animationIndex >= this.animations.length) {
            this.animationIndex = 0;
        }
        this.src = this.animations[this.animationIndex];
    }

    stopLoop() {
        this.loop = !this.loop;
    }

    stopAnimation() {
        this._lottieView.cancelAnimation();
    }

    playAnimation() {
        this._lottieView.playAnimation();
    }

    lottieViewLoaded(event) {
        this._lottieView = <LottieView>event.object;
        this.maxProgress = this._lottieView.duration;
    }

    onSliderChange(event) {
        let slider = <Slider>event.object;
        this._lottieView.progress = slider.value;
    }

}
