import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmtchleadstopropsPage } from './schmtchleadstoprops.page';

const routes: Routes = [
  {
    path: '',
    component: SchmtchleadstopropsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmtchleadstopropsPage]
})
export class SchmtchleadstopropsPageModule {}
