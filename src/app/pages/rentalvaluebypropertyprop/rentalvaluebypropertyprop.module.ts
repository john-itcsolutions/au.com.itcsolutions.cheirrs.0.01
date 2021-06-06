import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalvaluebypropertypropPage } from './rentalvaluebypropertyprop.page';

const routes: Routes = [
  {
    path: '',
    component: RentalvaluebypropertypropPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentalvaluebypropertypropPage]
})
export class RentalvaluebypropertypropPageModule {}
