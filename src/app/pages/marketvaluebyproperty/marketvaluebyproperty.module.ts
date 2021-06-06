import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarketvaluebypropertyPage } from './marketvaluebyproperty.page';

const routes: Routes = [
  {
    path: '',
    component: MarketvaluebypropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarketvaluebypropertyPage]
})
export class MarketvaluebypropertyPageModule {}
