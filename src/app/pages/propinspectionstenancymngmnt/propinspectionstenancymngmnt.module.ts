import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PropinspectionstenancymngmntPage } from './propinspectionstenancymngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: PropinspectionstenancymngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropinspectionstenancymngmntPage]
})
export class PropinspectionstenancymngmntPageModule {}
