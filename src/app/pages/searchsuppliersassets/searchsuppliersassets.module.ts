import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchsuppliersassetsPage } from './searchsuppliersassets.page';

const routes: Routes = [
  {
    path: '',
    component: SearchsuppliersassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchsuppliersassetsPage]
})
export class SearchsuppliersassetsPageModule {}
