import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CombinedprojectsPage } from './combinedprojects.page';

const routes: Routes = [
  {
    path: '',
    component: CombinedprojectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CombinedprojectsPage]
})
export class CombinedprojectsPageModule {}
