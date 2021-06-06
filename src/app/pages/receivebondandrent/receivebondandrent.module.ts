import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceivebondandrentPage } from './receivebondandrent.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivebondandrentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceivebondandrentPage]
})
export class ReceivebondandrentPageModule {}
