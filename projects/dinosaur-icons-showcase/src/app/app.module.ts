import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DinosaurIconsModule} from '../../../dinosaur-icons/src/lib/dinosaur-icons.module';
import {DinosaurIconsRegistry} from '../../../dinosaur-icons/src/lib/dinosaur-icons-registry.service';
import {dinosaurIconsArtist, dinosaurIconsBirthday, dinosaurIconsChef} from '../../../dinosaur-icons/src/lib/dinosaur-icons';

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
export class AppModule {

    constructor(private dinosaurIconRegistry: DinosaurIconsRegistry) {
        this.dinosaurIconRegistry.registerIcons([
            dinosaurIconsArtist,
            dinosaurIconsBirthday,
            dinosaurIconsChef
        ]);
    }
}
