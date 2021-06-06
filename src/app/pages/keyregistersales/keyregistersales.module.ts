import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KeyregistersalesPage } from './keyregistersales.page';

const routes: Routes = [
  {
    path: '',
    component: KeyregistersalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeyregistersalesPage]
})
export class KeyregistersalesPageModule {}
