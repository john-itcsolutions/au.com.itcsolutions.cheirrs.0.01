import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CyclicalrepairsbypropertyPage } from './cyclicalrepairsbyproperty.page';

const routes: Routes = [
  {
    path: '',
    component: CyclicalrepairsbypropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CyclicalrepairsbypropertyPage]
})
export class CyclicalrepairsbypropertyPageModule {}
