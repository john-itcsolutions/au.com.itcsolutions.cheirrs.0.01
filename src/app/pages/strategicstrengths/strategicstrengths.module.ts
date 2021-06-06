import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrategicstrengthsPage } from './strategicstrengths.page';

const routes: Routes = [
  {
    path: '',
    component: StrategicstrengthsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StrategicstrengthsPage]
})
export class StrategicstrengthsPageModule {}
