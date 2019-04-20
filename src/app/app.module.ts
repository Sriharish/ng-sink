// Angular Modules
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { RouterModule } from '@angular/router';

// Kitchen Sink Modules
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { KITCHEN_SINK_ROUTES } from './routes';

@NgModule({
  imports: [
    CoreModule,
    MaterialModule,
    RouterModule.forRoot(KITCHEN_SINK_ROUTES),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */