import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceivebillformaintworkassetsPage } from './receivebillformaintworkassets.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivebillformaintworkassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceivebillformaintworkassetsPage]
})
export class ReceivebillformaintworkassetsPageModule {}
