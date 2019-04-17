;
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { KitchenSinkMaterialModule } from './kitchen-sink-material/kitchen-sink-material.module';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BaselineComponent } from './baseline/baseline.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { ConnectedOverlayComponent } from './connected-overlay/connected-overlay.component';
import { DatasetComponent } from './dataset/dataset.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { FocusOriginComponent } from './focus-origin/focus-origin.component';
import { GesturesComponent } from './gestures/gestures.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { LiveAnnouncerComponent } from './live-announcer/live-announcer.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PlatformComponent } from './platform/platform.component';
import { PortalComponent } from './portal/portal.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioComponent } from './radio/radio.component';
import { RippleComponent } from './ripple/ripple.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';
import { TypographyComponent } from './typography/typography.component';
import { ScreenTypeComponent } from './screen-type/screen-type.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ExamplesComponent } from './examples/examples.component';
import { HomeComponent } from './home/home.component';
import { KITCHEN_SINK_ROUTES } from './routes';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    KitchenSinkMaterialModule,
    RouterModule.forRoot(KITCHEN_SINK_ROUTES),
  ],
  declarations: [AppComponent, AutocompleteComponent, BadgeComponent, BottomSheetComponent, BaselineComponent, ButtonComponent, ButtonToggleComponent, CardComponent, CheckboxComponent, ChipsComponent, ConnectedOverlayComponent, DatasetComponent, DatepickerComponent, DialogComponent, DrawerComponent, DragDropComponent, ExpansionComponent, FocusOriginComponent, GesturesComponent, GridListComponent, IconComponent, InputComponent, ListComponent, LiveAnnouncerComponent, MenuComponent, PaginatorComponent, PlatformComponent, PortalComponent, ProgressBarComponent, ProgressSpinnerComponent, RadioComponent, RippleComponent, SelectComponent, SidenavComponent, SlideToggleComponent, SliderComponent, SnackBarComponent, StepperComponent, TableComponent, TabsComponent, ToolbarComponent, TooltipComponent, TreeComponent, TypographyComponent, ScreenTypeComponent, VirtualScrollComponent, ExamplesComponent, HomeComponent, NotFoundComponent],
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