import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AmenitiesbypropertyPage } from './amenitiesbyproperty.page';

const routes: Routes = [
  {
    path: '',
    component: AmenitiesbypropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AmenitiesbypropertyPage]
})
export class AmenitiesbypropertyPageModule {}
