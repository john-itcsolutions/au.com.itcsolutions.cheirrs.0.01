import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RiskmngmntPage } from './riskmngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: RiskmngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiskmngmntPage]
})
export class RiskmngmntPageModule {}
