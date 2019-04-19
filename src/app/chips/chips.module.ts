import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenSinkMaterialModule } from '../kitchen-sink-material/kitchen-sink-material.module';
import { ChipsComponent } from './chips.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChipsComponent
  }
];

@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    KitchenSinkMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ChipsModule { }
