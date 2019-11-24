import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DinosaurIconsModule} from '../../../dinosaur-icons/src/lib/dinosaur-icons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DinosaurIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
