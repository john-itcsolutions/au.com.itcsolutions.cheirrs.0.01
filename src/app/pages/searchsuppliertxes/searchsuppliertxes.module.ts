import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchsuppliertxesPage } from './searchsuppliertxes.page';

const routes: Routes = [
  {
    path: '',
    component: SearchsuppliertxesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchsuppliertxesPage]
})
export class SearchsuppliertxesPageModule {}
