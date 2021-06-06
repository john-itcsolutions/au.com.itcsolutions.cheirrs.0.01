import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrategicmissionPage } from './strategicmission.page';

const routes: Routes = [
  {
    path: '',
    component: StrategicmissionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StrategicmissionPage]
})
export class StrategicmissionPageModule {}
