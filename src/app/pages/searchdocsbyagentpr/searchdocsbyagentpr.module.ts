import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbyagentprPage } from './searchdocsbyagentpr.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbyagentprPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbyagentprPage]
})
export class SearchdocsbyagentprPageModule {}
