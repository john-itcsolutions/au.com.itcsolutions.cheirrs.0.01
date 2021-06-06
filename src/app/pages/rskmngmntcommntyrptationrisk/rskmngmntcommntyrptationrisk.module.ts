import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RskmngmntcommntyrptationriskPage } from './rskmngmntcommntyrptationrisk.page';

const routes: Routes = [
  {
    path: '',
    component: RskmngmntcommntyrptationriskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RskmngmntcommntyrptationriskPage]
})
export class RskmngmntcommntyrptationriskPageModule {}
