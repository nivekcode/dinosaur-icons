import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';
import {DinosaurIconsModule} from '../../../dinosaur-icons/src/lib/dinosaur-icons.module';
import {DinosaurIconsRegistry} from '../../../dinosaur-icons/src/lib/dinosaur-icons-registry.service';
import {dinosaurIconsArtist} from '../../../dinosaur-icons/src/lib/dinosaur-artist';

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
            dinosaurIconsArtist
        ]);
    }
}
