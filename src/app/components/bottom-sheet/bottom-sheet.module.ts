import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { BottomSheetComponent } from './bottom-sheet.component';
import { RouterModule, Routes } from '@angular/router';
import { BottomSheetOverviewExampleSheet } from './bottom-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: BottomSheetComponent
  }
];

@NgModule({
  declarations: [BottomSheetComponent, BottomSheetOverviewExampleSheet],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet
  ]
})
export class BottomSheetModule { }
