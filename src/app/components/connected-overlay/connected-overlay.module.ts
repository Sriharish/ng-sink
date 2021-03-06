import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ConnectedOverlayComponent } from './connected-overlay.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ConnectedOverlayComponent
  }
];

@NgModule({
  declarations: [ConnectedOverlayComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ConnectedOverlayModule { }
