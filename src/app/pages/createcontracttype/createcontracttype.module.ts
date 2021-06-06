import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreatecontracttypePage } from './createcontracttype.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecontracttypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreatecontracttypePage]
})
export class CreatecontracttypePageModule {}
