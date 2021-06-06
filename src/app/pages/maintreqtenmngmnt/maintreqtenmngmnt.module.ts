import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaintreqtenmngmntPage } from './maintreqtenmngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: MaintreqtenmngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaintreqtenmngmntPage]
})
export class MaintreqtenmngmntPageModule {}
