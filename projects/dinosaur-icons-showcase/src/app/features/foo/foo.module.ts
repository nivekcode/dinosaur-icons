import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FooComponent} from './foo.component';
import {DinosaurIconsRegistry} from '../../../../../dinosaur-icons/src/lib/dinosaur-icons-registry.service';
import {DinosaurIconsModule} from '../../../../../dinosaur-icons/src/lib/dinosaur-icons.module';
import {dinosaurIconsBirthday} from '../../../../../dinosaur-icons/src/lib/dinosaur-birthday';
import {dinosaurIconsChef} from '../../../../../dinosaur-icons/src/lib/dinosaur-chef';
import {dinosaurIconsSleep} from '../../../../../dinosaur-icons/src/lib/dinosaur-sleep';
import {dinosaurIconsSpace} from '../../../../../dinosaur-icons/src/lib/dinosaur-space';


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
            dinosaurIconsChef,
            dinosaurIconsSleep,
            dinosaurIconsSpace
        ]);
    }

}
