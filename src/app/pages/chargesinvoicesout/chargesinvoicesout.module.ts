import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChargesinvoicesoutPage } from './chargesinvoicesout.page';

const routes: Routes = [
  {
    path: '',
    component: ChargesinvoicesoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChargesinvoicesoutPage]
})
export class ChargesinvoicesoutPageModule {}
