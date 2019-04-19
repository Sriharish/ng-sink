import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenSinkMaterialModule } from '../kitchen-sink-material/kitchen-sink-material.module';
import { RippleComponent } from './ripple.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RippleComponent
  }
];

@NgModule({
  declarations: [RippleComponent],
  imports: [
    CommonModule,
    KitchenSinkMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class RippleModule { }
