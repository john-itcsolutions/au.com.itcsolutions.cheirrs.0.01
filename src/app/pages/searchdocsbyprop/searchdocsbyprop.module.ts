import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbypropPage } from './searchdocsbyprop.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbypropPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbypropPage]
})
export class SearchdocsbypropPageModule {}
