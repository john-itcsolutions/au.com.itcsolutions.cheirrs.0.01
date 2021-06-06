import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopordersrecdPage } from './workshopordersrecd.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopordersrecdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopordersrecdPage]
})
export class WorkshopordersrecdPageModule {}
