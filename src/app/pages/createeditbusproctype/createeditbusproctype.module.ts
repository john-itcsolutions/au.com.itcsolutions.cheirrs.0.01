import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateeditbusproctypePage } from './createeditbusproctype.page';

const routes: Routes = [
  {
    path: '',
    component: CreateeditbusproctypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateeditbusproctypePage]
})
export class CreateeditbusproctypePageModule {}
