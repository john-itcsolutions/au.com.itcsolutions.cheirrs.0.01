import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmtchinvestorstopropscrmPage } from './schmtchinvestorstopropscrm.page';

const routes: Routes = [
  {
    path: '',
    component: SchmtchinvestorstopropscrmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmtchinvestorstopropscrmPage]
})
export class SchmtchinvestorstopropscrmPageModule {}
