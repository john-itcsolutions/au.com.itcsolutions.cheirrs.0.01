import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalarypacksfringebenefitsPage } from './salarypacksfringebenefits.page';

const routes: Routes = [
  {
    path: '',
    component: SalarypacksfringebenefitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalarypacksfringebenefitsPage]
})
export class SalarypacksfringebenefitsPageModule {}
