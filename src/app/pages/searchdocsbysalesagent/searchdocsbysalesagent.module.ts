import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbysalesagentPage } from './searchdocsbysalesagent.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbysalesagentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbysalesagentPage]
})
export class SearchdocsbysalesagentPageModule {}
