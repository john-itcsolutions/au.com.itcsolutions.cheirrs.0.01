import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExchangecontractsPage } from './exchangecontracts.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangecontractsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExchangecontractsPage]
})
export class ExchangecontractsPageModule {}
