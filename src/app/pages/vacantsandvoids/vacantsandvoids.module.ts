import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VacantsandvoidsPage } from './vacantsandvoids.page';

const routes: Routes = [
  {
    path: '',
    component: VacantsandvoidsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VacantsandvoidsPage]
})
export class VacantsandvoidsPageModule {}
