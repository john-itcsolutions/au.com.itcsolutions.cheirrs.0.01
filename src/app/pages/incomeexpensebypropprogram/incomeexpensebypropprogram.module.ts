import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IncomeexpensebypropprogramPage } from './incomeexpensebypropprogram.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeexpensebypropprogramPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IncomeexpensebypropprogramPage]
})
export class IncomeexpensebypropprogramPageModule {}
