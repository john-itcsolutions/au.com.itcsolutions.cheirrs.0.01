import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchemplandagentstxesPage } from './searchemplandagentstxes.page';

const routes: Routes = [
  {
    path: '',
    component: SearchemplandagentstxesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchemplandagentstxesPage]
})
export class SearchemplandagentstxesPageModule {}
