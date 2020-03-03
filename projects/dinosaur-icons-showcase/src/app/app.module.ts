import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';
import {DinosaurIconsModule, DinosaurIconsRegistry} from 'dinosaur-icons';
import {dinosaurIconsArtist} from 'dinosaur-icons/icons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DinosaurIconsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private dinosaurIconRegistry: DinosaurIconsRegistry) {
        this.dinosaurIconRegistry.registerIcons([
            dinosaurIconsArtist as any
        ]);
    }
}
