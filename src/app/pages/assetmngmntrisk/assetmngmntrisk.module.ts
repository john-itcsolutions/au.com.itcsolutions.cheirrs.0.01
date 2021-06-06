import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssetmngmntriskPage } from './assetmngmntrisk.page';

const routes: Routes = [
  {
    path: '',
    component: AssetmngmntriskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssetmngmntriskPage]
})
export class AssetmngmntriskPageModule {}
