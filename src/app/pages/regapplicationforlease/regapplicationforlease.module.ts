import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegapplicationforleasePage } from './regapplicationforlease.page';

const routes: Routes = [
  {
    path: '',
    component: RegapplicationforleasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegapplicationforleasePage]
})
export class RegapplicationforleasePageModule {}
