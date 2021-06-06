import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpecificperformanceordersbytenantPage } from './specificperformanceordersbytenant.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificperformanceordersbytenantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpecificperformanceordersbytenantPage]
})
export class SpecificperformanceordersbytenantPageModule {}
