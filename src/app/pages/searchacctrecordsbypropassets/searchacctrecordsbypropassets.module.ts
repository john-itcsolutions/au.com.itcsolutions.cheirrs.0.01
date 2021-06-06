import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchacctrecordsbypropassetsPage } from './searchacctrecordsbypropassets.page';

const routes: Routes = [
  {
    path: '',
    component: SearchacctrecordsbypropassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchacctrecordsbypropassetsPage]
})
export class SearchacctrecordsbypropassetsPageModule {}
