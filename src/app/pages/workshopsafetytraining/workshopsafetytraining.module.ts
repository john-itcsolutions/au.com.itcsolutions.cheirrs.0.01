import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopsafetytrainingPage } from './workshopsafetytraining.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsafetytrainingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopsafetytrainingPage]
})
export class WorkshopsafetytrainingPageModule {}
