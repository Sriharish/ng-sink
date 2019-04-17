// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

// Kitchen Sink Modules
import { KitchenSinkMaterialModule } from './kitchen-sink-material/kitchen-sink-material.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { BadgeModule } from './badge/badge.module';
import { BottomSheetModule } from './bottom-sheet/bottom-sheet.module';
import { ButtonModule } from './button/button.module';
import { ButtonToggleModule } from './button-toggle/button-toggle.module';
import { CardModule } from './card/card.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { ChipsModule } from './chips/chips.module';
import { ConnectedOverlayModule } from './connected-overlay/connected-overlay.module';
import { DatasetModule } from './dataset/dataset.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { DialogModule } from './dialog/dialog.module';
import { DragDropModule } from './drag-drop/drag-drop.module';
import { DrawerModule } from './drawer/drawer.module';
import { ExamplesModule } from './examples/examples.module';
import { ExpansionModule } from './expansion/expansion.module';
import { FocusOriginModule } from './focus-origin/focus-origin.module';
import { GesturesModule } from './gestures/gestures.module';
import { GridListModule } from './grid-list/grid-list.module';
import { HomeModule } from './home/home.module';
import { IconModule } from './icon/icon.module';
import { InputModule } from './input/input.module';
import { ListModule } from './list/list.module';
import { LiveAnnouncerModule } from './live-announcer/live-announcer.module';
import { MenuModule } from './menu/menu.module';
import { NotFoundModule } from './not-found/not-found.module';
import { PaginatorModule } from './paginator/paginator.module';
import { PlatformModule } from './platform/platform.module';
import { PortalModule } from './portal/portal.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { ProgressSpinnerModule } from './progress-spinner/progress-spinner.module';
import { RadioModule } from './radio/radio.module';
import { RippleModule } from './ripple/ripple.module';
import { ScreenTypeModule } from './screen-type/screen-type.module';
import { SelectModule } from './select/select.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { SlideToggleModule } from './slide-toggle/slide-toggle.module';
import { SliderModule } from './slider/slider.module';
import { SnackBarModule } from './snack-bar/snack-bar.module';
import { StepperModule } from './stepper/stepper.module';
import { TableModule } from './table/table.module';
import { TabsModule } from './tabs/tabs.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { TreeModule } from './tree/tree.module';
import { TypographyModule } from './typography/typography.module';
import { VirtualScrollModule } from './virtual-scroll/virtual-scroll.module';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
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
import { NotFoundComponent } from './not-found/not-found.component';
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
    AutocompleteModule,
    BadgeModule,
    BottomSheetModule,
    ButtonModule,
    ButtonToggleModule,
    CardModule,
    CheckboxModule,
    ChipsModule,
    ConnectedOverlayModule,
    DatasetModule,
    DatepickerModule,
    DialogModule,
    DragDropModule,
    DrawerModule,
    ExamplesModule,
    ExpansionModule,
    FocusOriginModule,
    GesturesModule,
    GridListModule,
    HomeModule,
    IconModule,
    InputModule,
    ListModule,
    LiveAnnouncerModule,
    MenuModule,
    NotFoundModule,
    PaginatorModule,
    PlatformModule,
    PortalModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RadioModule,
    RippleModule,
    ScreenTypeModule,
    SelectModule,
    SidenavModule,
    SlideToggleModule,
    SliderModule,
    SnackBarModule,
    StepperModule,
    TableModule,
    TabsModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TypographyModule,
    VirtualScrollModule,
  ],
  declarations: [AppComponent, AutocompleteComponent, BadgeComponent, BottomSheetComponent, ButtonComponent, ButtonToggleComponent, CardComponent, CheckboxComponent, ChipsComponent, ConnectedOverlayComponent, DatasetComponent, DatepickerComponent, DialogComponent, DrawerComponent, DragDropComponent, ExpansionComponent, FocusOriginComponent, GesturesComponent, GridListComponent, IconComponent, InputComponent, ListComponent, LiveAnnouncerComponent, MenuComponent, PaginatorComponent, PlatformComponent, PortalComponent, ProgressBarComponent, ProgressSpinnerComponent, RadioComponent, RippleComponent, SelectComponent, SidenavComponent, SlideToggleComponent, SliderComponent, SnackBarComponent, StepperComponent, TableComponent, TabsComponent, ToolbarComponent, TooltipComponent, TreeComponent, TypographyComponent, ScreenTypeComponent, VirtualScrollComponent, ExamplesComponent, HomeComponent, NotFoundComponent],
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