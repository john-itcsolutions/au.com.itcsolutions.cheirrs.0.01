import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalarypackfringebenefitsPage } from './salarypackfringebenefits.page';

const routes: Routes = [
  {
    path: '',
    component: SalarypackfringebenefitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalarypackfringebenefitsPage]
})
export class SalarypackfringebenefitsPageModule {}
