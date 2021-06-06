import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmtchlandlordstenantsllordspagePage } from './schmtchlandlordstenantsllordspage.page';

const routes: Routes = [
  {
    path: '',
    component: SchmtchlandlordstenantsllordspagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmtchlandlordstenantsllordspagePage]
})
export class SchmtchlandlordstenantsllordspagePageModule {}
