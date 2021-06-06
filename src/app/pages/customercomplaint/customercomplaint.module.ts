import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomercomplaintPage } from './customercomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: CustomercomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomercomplaintPage]
})
export class CustomercomplaintPageModule {}
