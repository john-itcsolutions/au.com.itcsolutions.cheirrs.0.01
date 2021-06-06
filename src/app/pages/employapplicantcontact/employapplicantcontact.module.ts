import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployapplicantcontactPage } from './employapplicantcontact.page';

const routes: Routes = [
  {
    path: '',
    component: EmployapplicantcontactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployapplicantcontactPage]
})
export class EmployapplicantcontactPageModule {}
