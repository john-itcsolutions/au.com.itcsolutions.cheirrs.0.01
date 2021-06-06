import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaseapplicantcomplaintPage } from './leaseapplicantcomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: LeaseapplicantcomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaseapplicantcomplaintPage]
})
export class LeaseapplicantcomplaintPageModule {}
