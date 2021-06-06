import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvoicesreceivedPage } from './invoicesreceived.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicesreceivedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoicesreceivedPage]
})
export class InvoicesreceivedPageModule {}
