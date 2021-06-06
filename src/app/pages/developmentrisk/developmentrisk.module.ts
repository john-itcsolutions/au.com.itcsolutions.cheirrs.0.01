import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DevelopmentriskPage } from './developmentrisk.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopmentriskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevelopmentriskPage]
})
export class DevelopmentriskPageModule {}
