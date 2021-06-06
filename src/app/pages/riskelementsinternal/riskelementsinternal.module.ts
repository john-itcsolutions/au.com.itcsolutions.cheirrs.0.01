import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RiskelementsinternalPage } from './riskelementsinternal.page';

const routes: Routes = [
  {
    path: '',
    component: RiskelementsinternalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiskelementsinternalPage]
})
export class RiskelementsinternalPageModule {}
