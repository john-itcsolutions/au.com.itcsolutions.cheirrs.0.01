import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalescommissionsalesPage } from './salescommissionsales.page';

const routes: Routes = [
  {
    path: '',
    component: SalescommissionsalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalescommissionsalesPage]
})
export class SalescommissionsalesPageModule {}
