import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuppliertxassetsPage } from './suppliertxassets.page';

const routes: Routes = [
  {
    path: '',
    component: SuppliertxassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuppliertxassetsPage]
})
export class SuppliertxassetsPageModule {}
