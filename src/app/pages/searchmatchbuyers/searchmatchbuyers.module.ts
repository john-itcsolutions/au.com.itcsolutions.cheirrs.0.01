import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchmatchbuyersPage } from './searchmatchbuyers.page';

const routes: Routes = [
  {
    path: '',
    component: SearchmatchbuyersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchmatchbuyersPage]
})
export class SearchmatchbuyersPageModule {}
