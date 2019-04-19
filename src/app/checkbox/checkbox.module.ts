import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenSinkMaterialModule } from '../kitchen-sink-material/kitchen-sink-material.module';
import { CheckboxComponent } from './checkbox.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CheckboxComponent
  }
];

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    KitchenSinkMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckboxModule { }
