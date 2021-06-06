import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchtenantsledgerbytenantPage } from './searchtenantsledgerbytenant.page';

const routes: Routes = [
  {
    path: '',
    component: SearchtenantsledgerbytenantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchtenantsledgerbytenantPage]
})
export class SearchtenantsledgerbytenantPageModule {}
