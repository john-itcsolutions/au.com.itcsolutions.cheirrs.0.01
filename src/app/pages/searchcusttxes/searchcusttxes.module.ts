import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchcusttxesPage } from './searchcusttxes.page';

const routes: Routes = [
  {
    path: '',
    component: SearchcusttxesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchcusttxesPage]
})
export class SearchcusttxesPageModule {}
