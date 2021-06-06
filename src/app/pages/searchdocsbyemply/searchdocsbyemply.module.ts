import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbyemplyPage } from './searchdocsbyemply.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbyemplyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbyemplyPage]
})
export class SearchdocsbyemplyPageModule {}
