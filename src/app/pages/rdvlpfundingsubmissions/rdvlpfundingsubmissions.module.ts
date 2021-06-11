import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdvlpfundingsubmissionsPage } from './rdvlpfundingsubmissions.page';

const routes: Routes = [
  {
    path: '',
    component: RdvlpfundingsubmissionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdvlpfundingsubmissionsPage]
})
export class RdvlpfundingsubmissionsPageModule {}
