import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CleanupvacatedpropertyPage } from './cleanupvacatedproperty.page';

const routes: Routes = [
  {
    path: '',
    component: CleanupvacatedpropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CleanupvacatedpropertyPage]
})
export class CleanupvacatedpropertyPageModule {}
