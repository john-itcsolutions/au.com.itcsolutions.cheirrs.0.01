import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListcurrentandpendingcontractsPage } from './listcurrentandpendingcontracts.page';

const routes: Routes = [
  {
    path: '',
    component: ListcurrentandpendingcontractsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListcurrentandpendingcontractsPage]
})
export class ListcurrentandpendingcontractsPageModule {}
