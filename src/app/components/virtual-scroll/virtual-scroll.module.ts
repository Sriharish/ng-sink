import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VirtualScrollComponent
  }
];

@NgModule({
  declarations: [VirtualScrollComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class VirtualScrollModule { }
