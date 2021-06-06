import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchemplandagentstxesprPage } from './searchemplandagentstxespr.page';

const routes: Routes = [
  {
    path: '',
    component: SearchemplandagentstxesprPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchemplandagentstxesprPage]
})
export class SearchemplandagentstxesprPageModule {}
