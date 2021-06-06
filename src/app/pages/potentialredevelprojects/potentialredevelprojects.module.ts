import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PotentialredevelprojectsPage } from './potentialredevelprojects.page';

const routes: Routes = [
  {
    path: '',
    component: PotentialredevelprojectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PotentialredevelprojectsPage]
})
export class PotentialredevelprojectsPageModule {}
