import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { MaterialModule } from '../../material.module';
import { AutocompleteComponent } from './autocomplete.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AutocompleteComponent
  }
];

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CoreModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AutocompleteModule { }
