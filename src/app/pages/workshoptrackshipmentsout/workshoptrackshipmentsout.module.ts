import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshoptrackshipmentsoutPage } from './workshoptrackshipmentsout.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshoptrackshipmentsoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshoptrackshipmentsoutPage]
})
export class WorkshoptrackshipmentsoutPageModule {}
