import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';
import {DinosaurIconsModule, DinosaurIconsRegistry} from 'dinosaur-icons';
import {dinosaurIconsBirthday, dinosaurIconsChef} from 'dinosaur-icons/icons';

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
export class BarModule {

  constructor(private dinosaurIconRegistry: DinosaurIconsRegistry) {
    this.dinosaurIconRegistry.registerIcons([
      dinosaurIconsBirthday,
      dinosaurIconsChef
    ]);
  }j
}
