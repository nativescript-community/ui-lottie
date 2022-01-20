import {
  NgModule,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptLottieModule } from '@nativescript-community/ui-lottie/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptLottieModule, AppRoutingModule, HomeModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
