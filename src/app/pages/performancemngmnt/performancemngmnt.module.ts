import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerformancemngmntPage } from './performancemngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: PerformancemngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerformancemngmntPage]
})
export class PerformancemngmntPageModule {}
