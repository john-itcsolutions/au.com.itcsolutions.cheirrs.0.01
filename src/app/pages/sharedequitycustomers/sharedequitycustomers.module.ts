import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedequitycustomersPage } from './sharedequitycustomers.page';

const routes: Routes = [
  {
    path: '',
    component: SharedequitycustomersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SharedequitycustomersPage]
})
export class SharedequitycustomersPageModule {}
