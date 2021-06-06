import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmatchtenantstopropsPage } from './schmatchtenantstoprops.page';

const routes: Routes = [
  {
    path: '',
    component: SchmatchtenantstopropsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmatchtenantstopropsPage]
})
export class SchmatchtenantstopropsPageModule {}
