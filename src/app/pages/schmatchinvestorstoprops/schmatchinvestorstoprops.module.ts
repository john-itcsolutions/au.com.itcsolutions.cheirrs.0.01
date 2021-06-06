import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmatchinvestorstopropsPage } from './schmatchinvestorstoprops.page';

const routes: Routes = [
  {
    path: '',
    component: SchmatchinvestorstopropsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmatchinvestorstopropsPage]
})
export class SchmatchinvestorstopropsPageModule {}
