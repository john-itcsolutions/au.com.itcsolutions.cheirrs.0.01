import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaxationliabilitiesPage } from './taxationliabilities.page';

const routes: Routes = [
  {
    path: '',
    component: TaxationliabilitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaxationliabilitiesPage]
})
export class TaxationliabilitiesPageModule {}
