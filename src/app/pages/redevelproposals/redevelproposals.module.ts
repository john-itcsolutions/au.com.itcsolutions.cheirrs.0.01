import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RedevelproposalsPage } from './redevelproposals.page';

const routes: Routes = [
  {
    path: '',
    component: RedevelproposalsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RedevelproposalsPage]
})
export class RedevelproposalsPageModule {}
