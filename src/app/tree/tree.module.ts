import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenSinkMaterialModule } from '../kitchen-sink-material/kitchen-sink-material.module';
import { TreeComponent } from './tree.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TreeComponent
  }
];

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    KitchenSinkMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class TreeModule { }
