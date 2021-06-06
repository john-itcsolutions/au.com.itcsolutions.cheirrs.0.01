import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrategicplanningPage } from './strategicplanning.page';

const routes: Routes = [
  {
    path: '',
    component: StrategicplanningPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StrategicplanningPage]
})
export class StrategicplanningPageModule {}
