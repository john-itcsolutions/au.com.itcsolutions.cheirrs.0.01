import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaintenanceschedulingPage } from './maintenancescheduling.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceschedulingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaintenanceschedulingPage]
})
export class MaintenanceschedulingPageModule {}
