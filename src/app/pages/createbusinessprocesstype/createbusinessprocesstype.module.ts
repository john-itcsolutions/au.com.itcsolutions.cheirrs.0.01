import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreatebusinessprocesstypePage } from './createbusinessprocesstype.page';

const routes: Routes = [
  {
    path: '',
    component: CreatebusinessprocesstypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreatebusinessprocesstypePage]
})
export class CreatebusinessprocesstypePageModule {}
