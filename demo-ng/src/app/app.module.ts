import {
  NgModule,
  NgModuleFactoryLoader,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
