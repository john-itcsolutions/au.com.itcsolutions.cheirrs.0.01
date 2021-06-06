import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshoptrainingPage } from './workshoptraining.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshoptrainingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshoptrainingPage]
})
export class WorkshoptrainingPageModule {}
