import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FooComponent} from './foo.component';
import {DinosaurIconsModule, DinosaurIconsRegistry} from 'dinosaur-icons';
import {dinosaurIconsBirthday, dinosaurIconsChef, dinosaurIconsSleep, dinosaurIconsSpace} from 'dinosaur-icons/icons';

const routes: Routes = [
    {path: '', component: FooComponent}
];

@NgModule({
    declarations: [FooComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DinosaurIconsModule
    ]
})
export class FooModule {

    constructor(private dinosaurIconRegistry: DinosaurIconsRegistry) {
        this.dinosaurIconRegistry.registerIcons([
            dinosaurIconsBirthday,
            dinosaurIconsSleep,
            dinosaurIconsSpace
        ]);
    }

}
