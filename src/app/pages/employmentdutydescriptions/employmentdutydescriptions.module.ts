import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmploymentdutydescriptionsPage } from './employmentdutydescriptions.page';

const routes: Routes = [
  {
    path: '',
    component: EmploymentdutydescriptionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmploymentdutydescriptionsPage]
})
export class EmploymentdutydescriptionsPageModule {}
