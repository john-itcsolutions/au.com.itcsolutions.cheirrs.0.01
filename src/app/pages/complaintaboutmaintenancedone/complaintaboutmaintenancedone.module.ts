import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComplaintaboutmaintenancedonePage } from './complaintaboutmaintenancedone.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintaboutmaintenancedonePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComplaintaboutmaintenancedonePage]
})
export class ComplaintaboutmaintenancedonePageModule {}
