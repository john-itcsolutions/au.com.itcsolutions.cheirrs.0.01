import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopinductionPage } from './workshopinduction.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopinductionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopinductionPage]
})
export class WorkshopinductionPageModule {}
