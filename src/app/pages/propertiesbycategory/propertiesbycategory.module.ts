import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PropertiesbycategoryPage } from './propertiesbycategory.page';

const routes: Routes = [
  {
    path: '',
    component: PropertiesbycategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropertiesbycategoryPage]
})
export class PropertiesbycategoryPageModule {}
