import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrialbalancereportingPage } from './trialbalancereporting.page';

const routes: Routes = [
  {
    path: '',
    component: TrialbalancereportingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrialbalancereportingPage]
})
export class TrialbalancereportingPageModule {}
