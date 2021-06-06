import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StratweaknessesrskmngmntPage } from './stratweaknessesrskmngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: StratweaknessesrskmngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StratweaknessesrskmngmntPage]
})
export class StratweaknessesrskmngmntPageModule {}
