import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmatchleadstopropsPage } from './schmatchleadstoprops.page';

const routes: Routes = [
  {
    path: '',
    component: SchmatchleadstopropsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmatchleadstopropsPage]
})
export class SchmatchleadstopropsPageModule {}
