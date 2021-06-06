import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KeyregisterassetsPage } from './keyregisterassets.page';

const routes: Routes = [
  {
    path: '',
    component: KeyregisterassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeyregisterassetsPage]
})
export class KeyregisterassetsPageModule {}
