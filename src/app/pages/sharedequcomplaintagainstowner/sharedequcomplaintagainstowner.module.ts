import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedequcomplaintagainstownerPage } from './sharedequcomplaintagainstowner.page';

const routes: Routes = [
  {
    path: '',
    component: SharedequcomplaintagainstownerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SharedequcomplaintagainstownerPage]
})
export class SharedequcomplaintagainstownerPageModule {}
