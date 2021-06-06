import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbyagentPage } from './searchdocsbyagent.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbyagentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbyagentPage]
})
export class SearchdocsbyagentPageModule {}
