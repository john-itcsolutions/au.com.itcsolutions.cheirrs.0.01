import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaybillformaintworkassetsPage } from './paybillformaintworkassets.page';

const routes: Routes = [
  {
    path: '',
    component: PaybillformaintworkassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaybillformaintworkassetsPage]
})
export class PaybillformaintworkassetsPageModule {}
