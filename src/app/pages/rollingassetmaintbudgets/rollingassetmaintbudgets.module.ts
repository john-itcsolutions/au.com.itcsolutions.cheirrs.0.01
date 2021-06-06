import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RollingassetmaintbudgetsPage } from './rollingassetmaintbudgets.page';

const routes: Routes = [
  {
    path: '',
    component: RollingassetmaintbudgetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RollingassetmaintbudgetsPage]
})
export class RollingassetmaintbudgetsPageModule {}
