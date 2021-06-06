import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilingtsheetsPage } from './filingtsheets.page';

const routes: Routes = [
  {
    path: '',
    component: FilingtsheetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilingtsheetsPage]
})
export class FilingtsheetsPageModule {}
