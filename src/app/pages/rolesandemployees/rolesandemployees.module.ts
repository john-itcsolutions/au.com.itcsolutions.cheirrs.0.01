import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RolesandemployeesPage } from './rolesandemployees.page';

const routes: Routes = [
  {
    path: '',
    component: RolesandemployeesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RolesandemployeesPage]
})
export class RolesandemployeesPageModule {}
