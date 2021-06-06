import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CorroandcommswithshequownerPage } from './corroandcommswithshequowner.page';

const routes: Routes = [
  {
    path: '',
    component: CorroandcommswithshequownerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CorroandcommswithshequownerPage]
})
export class CorroandcommswithshequownerPageModule {}
