import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MediacomplaintPage } from './mediacomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: MediacomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MediacomplaintPage]
})
export class MediacomplaintPageModule {}
