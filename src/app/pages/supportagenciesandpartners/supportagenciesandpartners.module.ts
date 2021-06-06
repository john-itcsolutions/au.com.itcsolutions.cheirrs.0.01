import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupportagenciesandpartnersPage } from './supportagenciesandpartners.page';

const routes: Routes = [
  {
    path: '',
    component: SupportagenciesandpartnersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SupportagenciesandpartnersPage]
})
export class SupportagenciesandpartnersPageModule {}
