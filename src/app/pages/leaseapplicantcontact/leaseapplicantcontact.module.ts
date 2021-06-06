import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaseapplicantcontactPage } from './leaseapplicantcontact.page';

const routes: Routes = [
  {
    path: '',
    component: LeaseapplicantcontactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaseapplicantcontactPage]
})
export class LeaseapplicantcontactPageModule {}
