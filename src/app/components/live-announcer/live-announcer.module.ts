import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { LiveAnnouncerComponent } from './live-announcer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LiveAnnouncerComponent
  }
];

@NgModule({
  declarations: [LiveAnnouncerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class LiveAnnouncerModule { }
