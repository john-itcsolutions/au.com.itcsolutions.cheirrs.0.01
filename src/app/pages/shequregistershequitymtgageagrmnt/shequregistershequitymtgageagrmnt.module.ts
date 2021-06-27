import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShequregistershequitymtgageagrmntPage } from './shequregistershequitymtgageagrmnt.page';

const routes: Routes = [
  {
    path: '',
    component: ShequregistershequitymtgageagrmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShequregistershequitymtgageagrmntPage]
})
export class ShequregistershequitymtgageagrmntPageModule {}
