import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PropertyinspbyhousingmanagerPage } from './propertyinspbyhousingmanager.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyinspbyhousingmanagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropertyinspbyhousingmanagerPage]
})
export class PropertyinspbyhousingmanagerPageModule {}
