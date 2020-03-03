import {NgModule} from '@angular/core';
import {DinosaurIconsComponent} from './dinosaur-icons.component';
import {DinosaurArtistComponent} from './dinosaur-artist.component';
import {DinosaurBirthdayComponent} from './dinosaur-birthday.component';
import {DinosaurChefComponent} from './dinosaur-chef.component';
import {DinosaurSleepComponent} from './dinosaur-sleep.component';
import {DinosaurSpaceComponent} from './dinosaur-space.component';

@NgModule({
    declarations: [DinosaurIconsComponent, DinosaurArtistComponent, DinosaurBirthdayComponent, DinosaurChefComponent, DinosaurSleepComponent, DinosaurSpaceComponent],
    imports: [],
    exports: [DinosaurArtistComponent, DinosaurBirthdayComponent, DinosaurChefComponent, DinosaurSleepComponent, DinosaurSpaceComponent]
})
export class DinosaurIconsModule {
}
