import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalestrustacctingPage } from './salestrustaccting.page';

const routes: Routes = [
  {
    path: '',
    component: SalestrustacctingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalestrustacctingPage]
})
export class SalestrustacctingPageModule {}
