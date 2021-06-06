import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalarypackagingfbtPage } from './salarypackagingfbt.page';

const routes: Routes = [
  {
    path: '',
    component: SalarypackagingfbtPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalarypackagingfbtPage]
})
export class SalarypackagingfbtPageModule {}
