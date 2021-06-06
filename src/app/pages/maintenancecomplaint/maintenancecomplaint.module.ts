import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaintenancecomplaintPage } from './maintenancecomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancecomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaintenancecomplaintPage]
})
export class MaintenancecomplaintPageModule {}
