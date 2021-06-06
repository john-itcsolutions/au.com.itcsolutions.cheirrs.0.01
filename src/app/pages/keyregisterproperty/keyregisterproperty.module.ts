import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KeyregisterpropertyPage } from './keyregisterproperty.page';

const routes: Routes = [
  {
    path: '',
    component: KeyregisterpropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeyregisterpropertyPage]
})
export class KeyregisterpropertyPageModule {}
