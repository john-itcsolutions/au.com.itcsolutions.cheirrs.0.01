import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyleavehistoryPage } from './myleavehistory.page';

const routes: Routes = [
  {
    path: '',
    component: MyleavehistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyleavehistoryPage]
})
export class MyleavehistoryPageModule {}
