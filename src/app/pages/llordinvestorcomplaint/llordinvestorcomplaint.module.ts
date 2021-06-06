import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LlordinvestorcomplaintPage } from './llordinvestorcomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: LlordinvestorcomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LlordinvestorcomplaintPage]
})
export class LlordinvestorcomplaintPageModule {}
