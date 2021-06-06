import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FactorymaintenancePage } from './factorymaintenance.page';

const routes: Routes = [
  {
    path: '',
    component: FactorymaintenancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FactorymaintenancePage]
})
export class FactorymaintenancePageModule {}
