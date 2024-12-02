import { Directive, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
// @ts-ignore
import { LottieView } from '@nativescript-community/ui-lottie';

@Directive({ selector: 'LottieView' })
export class LottieViewDirective {}

@NgModule({
    declarations: [LottieViewDirective],
    exports: [LottieViewDirective]
})
export class NativeScriptLottieModule {}

registerElement('LottieView', () => LottieView);
