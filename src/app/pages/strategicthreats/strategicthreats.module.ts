import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrategicthreatsPage } from './strategicthreats.page';

const routes: Routes = [
  {
    path: '',
    component: StrategicthreatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StrategicthreatsPage]
})
export class StrategicthreatsPageModule {}
