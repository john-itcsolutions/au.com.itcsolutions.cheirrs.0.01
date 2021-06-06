import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchrepmainthistbypropPage } from './searchrepmainthistbyprop.page';

const routes: Routes = [
  {
    path: '',
    component: SearchrepmainthistbypropPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchrepmainthistbypropPage]
})
export class SearchrepmainthistbypropPageModule {}
