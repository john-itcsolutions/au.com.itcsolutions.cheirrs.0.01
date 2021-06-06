import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinanceworkshopPage } from './financeworkshop.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceworkshopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinanceworkshopPage]
})
export class FinanceworkshopPageModule {}
