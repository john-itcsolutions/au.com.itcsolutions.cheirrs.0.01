import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrategicvisionPage } from './strategicvision.page';

const routes: Routes = [
  {
    path: '',
    component: StrategicvisionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StrategicvisionPage]
})
export class StrategicvisionPageModule {}
