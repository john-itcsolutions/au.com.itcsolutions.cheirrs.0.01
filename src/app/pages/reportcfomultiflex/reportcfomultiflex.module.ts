import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportcfomultiflexPage } from './reportcfomultiflex.page';

const routes: Routes = [
  {
    path: '',
    component: ReportcfomultiflexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportcfomultiflexPage]
})
export class ReportcfomultiflexPageModule {}
