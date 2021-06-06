import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceiveshequmortgepaymentPage } from './receiveshequmortgepayment.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiveshequmortgepaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceiveshequmortgepaymentPage]
})
export class ReceiveshequmortgepaymentPageModule {}
