import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimeesheetswagesandleavePage } from './timeesheetswagesandleave.page';

const routes: Routes = [
  {
    path: '',
    component: TimeesheetswagesandleavePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimeesheetswagesandleavePage]
})
export class TimeesheetswagesandleavePageModule {}
