import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PropertyvaluessalePage } from './propertyvaluessale.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyvaluessalePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropertyvaluessalePage]
})
export class PropertyvaluessalePageModule {}
