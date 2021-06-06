import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchsuppliersPage } from './searchsuppliers.page';

const routes: Routes = [
  {
    path: '',
    component: SearchsuppliersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchsuppliersPage]
})
export class SearchsuppliersPageModule {}
