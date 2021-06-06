import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductcomplaintsrecdPage } from './productcomplaintsrecd.page';

const routes: Routes = [
  {
    path: '',
    component: ProductcomplaintsrecdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductcomplaintsrecdPage]
})
export class ProductcomplaintsrecdPageModule {}
