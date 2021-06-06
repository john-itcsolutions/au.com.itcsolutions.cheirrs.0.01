import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RiskmanagementplanreportPage } from './riskmanagementplanreport.page';

const routes: Routes = [
  {
    path: '',
    component: RiskmanagementplanreportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiskmanagementplanreportPage]
})
export class RiskmanagementplanreportPageModule {}
