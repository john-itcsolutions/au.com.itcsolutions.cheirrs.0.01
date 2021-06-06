import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmtchtenantstopropsPage } from './schmtchtenantstoprops.page';

const routes: Routes = [
  {
    path: '',
    component: SchmtchtenantstopropsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmtchtenantstopropsPage]
})
export class SchmtchtenantstopropsPageModule {}
