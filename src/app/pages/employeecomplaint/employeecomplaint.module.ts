import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeecomplaintPage } from './employeecomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeecomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeecomplaintPage]
})
export class EmployeecomplaintPageModule {}
