import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdevelopitemsPage } from './rdevelopitems.page';

const routes: Routes = [
  {
    path: '',
    component: RdevelopitemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdevelopitemsPage]
})
export class RdevelopitemsPageModule {}
