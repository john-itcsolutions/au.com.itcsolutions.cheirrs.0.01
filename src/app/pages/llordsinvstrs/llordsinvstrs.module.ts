import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LlordsinvstrsPage } from './llordsinvstrs.page';

const routes: Routes = [
  {
    path: '',
    component: LlordsinvstrsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LlordsinvstrsPage]
})
export class LlordsinvstrsPageModule {}
