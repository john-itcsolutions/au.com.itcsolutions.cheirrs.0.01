import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchtenantsbypropPage } from './searchtenantsbyprop.page';

const routes: Routes = [
  {
    path: '',
    component: SearchtenantsbypropPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchtenantsbypropPage]
})
export class SearchtenantsbypropPageModule {}
