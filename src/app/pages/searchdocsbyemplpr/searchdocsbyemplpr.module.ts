import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbyemplprPage } from './searchdocsbyemplpr.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbyemplprPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbyemplprPage]
})
export class SearchdocsbyemplprPageModule {}
