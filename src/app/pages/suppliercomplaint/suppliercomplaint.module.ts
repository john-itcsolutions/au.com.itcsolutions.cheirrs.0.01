import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuppliercomplaintPage } from './suppliercomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: SuppliercomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuppliercomplaintPage]
})
export class SuppliercomplaintPageModule {}
