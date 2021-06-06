import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RiskmangmntplanningPage } from './riskmangmntplanning.page';

const routes: Routes = [
  {
    path: '',
    component: RiskmangmntplanningPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiskmangmntplanningPage]
})
export class RiskmangmntplanningPageModule {}
