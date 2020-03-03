import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FooComponent} from './foo.component';
import {DinosaurIconsModule} from '../../../../../dinosaur-icons/src/lib/dinosaur-icons.module';


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
}
