import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrivateinspectionsadmincrmPage } from './privateinspectionsadmincrm.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateinspectionsadmincrmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrivateinspectionsadmincrmPage]
})
export class PrivateinspectionsadmincrmPageModule {}
