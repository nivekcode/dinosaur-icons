import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';
import {DinosaurIconsModule} from '../../../../../dinosaur-icons/src/lib/dinosaur-icons.module';


const routes: Routes = [
  { path: '', component: BarComponent }
];

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
      DinosaurIconsModule
  ]
})
export class BarModule { }
