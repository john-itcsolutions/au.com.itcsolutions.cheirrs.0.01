import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerminateemployeeoragentPage } from './terminateemployeeoragent.page';

const routes: Routes = [
  {
    path: '',
    component: TerminateemployeeoragentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerminateemployeeoragentPage]
})
export class TerminateemployeeoragentPageModule {}
