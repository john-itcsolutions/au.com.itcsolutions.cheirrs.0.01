import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResponsiverepairsbypropertyPage } from './responsiverepairsbyproperty.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsiverepairsbypropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResponsiverepairsbypropertyPage]
})
export class ResponsiverepairsbypropertyPageModule {}
