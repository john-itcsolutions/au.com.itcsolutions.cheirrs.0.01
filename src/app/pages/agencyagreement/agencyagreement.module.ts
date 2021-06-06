import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgencyagreementPage } from './agencyagreement.page';

const routes: Routes = [
  {
    path: '',
    component: AgencyagreementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgencyagreementPage]
})
export class AgencyagreementPageModule {}
