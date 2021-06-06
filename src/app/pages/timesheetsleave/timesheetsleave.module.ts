import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimesheetsleavePage } from './timesheetsleave.page';

const routes: Routes = [
  {
    path: '',
    component: TimesheetsleavePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimesheetsleavePage]
})
export class TimesheetsleavePageModule {}
