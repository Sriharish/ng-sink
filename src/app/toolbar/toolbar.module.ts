import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenSinkMaterialModule } from '../kitchen-sink-material/kitchen-sink-material.module';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ToolbarComponent
  }
];

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    KitchenSinkMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ToolbarModule { }
