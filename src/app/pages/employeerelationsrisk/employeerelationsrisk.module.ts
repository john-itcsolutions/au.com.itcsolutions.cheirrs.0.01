import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeerelationsriskPage } from './employeerelationsrisk.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeerelationsriskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeerelationsriskPage]
})
export class EmployeerelationsriskPageModule {}
