import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IncomeexpensebypropclassPage } from './incomeexpensebypropclass.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeexpensebypropclassPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IncomeexpensebypropclassPage]
})
export class IncomeexpensebypropclassPageModule {}
