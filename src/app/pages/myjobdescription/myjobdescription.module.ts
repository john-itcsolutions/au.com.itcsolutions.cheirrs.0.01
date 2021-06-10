import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyjobdescriptionPage } from './myjobdescription.page';

const routes: Routes = [
  {
    path: '',
    component: MyjobdescriptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyjobdescriptionPage]
})
export class MyjobdescriptionPageModule {}
