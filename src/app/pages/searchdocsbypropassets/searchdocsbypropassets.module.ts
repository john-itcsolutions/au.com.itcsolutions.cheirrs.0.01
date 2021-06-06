import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbypropassetsPage } from './searchdocsbypropassets.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbypropassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbypropassetsPage]
})
export class SearchdocsbypropassetsPageModule {}
