import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssetmngmntPage } from './assetmngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: AssetmngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssetmngmntPage]
})
export class AssetmngmntPageModule {}
