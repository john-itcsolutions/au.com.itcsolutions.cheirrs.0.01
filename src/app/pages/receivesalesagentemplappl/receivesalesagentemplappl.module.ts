import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceivesalesagentemplapplPage } from './receivesalesagentemplappl.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivesalesagentemplapplPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceivesalesagentemplapplPage]
})
export class ReceivesalesagentemplapplPageModule {}
