import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChargebondandrentinadvancePage } from './chargebondandrentinadvance.page';

const routes: Routes = [
  {
    path: '',
    component: ChargebondandrentinadvancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChargebondandrentinadvancePage]
})
export class ChargebondandrentinadvancePageModule {}
