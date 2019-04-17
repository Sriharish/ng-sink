/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

 // Components
import { Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BaselineComponent } from './baseline/baseline.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { ConnectedOverlayComponent } from './connected-overlay/connected-overlay.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DrawerComponent } from './drawer/drawer.component';
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
import { ScreenTypeComponent } from './screen-type/screen-type.component';
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
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

// Custom Pages
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExamplesComponent } from './examples/examples.component';

export const KITCHEN_SINK_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'homecom', component: HomeComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'baseline', component: BaselineComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'card', component: CardComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'expansion', component: ExpansionComponent },
  { path: 'focus-origin', component: FocusOriginComponent },
  { path: 'gestures', component: GesturesComponent },
  { path: 'grid-list', component: GridListComponent },
  { path: 'icon', component: IconComponent },
  { path: 'input', component: InputComponent },
  { path: 'list', component: ListComponent },
  { path: 'live-announcer', component: LiveAnnouncerComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'ripple', component: RippleComponent },
  { path: 'select', component: SelectComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'snack-bar', component: SnackBarComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'expansion', component: ExpansionComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'screen-type', component: ScreenTypeComponent },
  { path: 'connected-overlay', component: ConnectedOverlayComponent },
  { path: 'virtual-scroll', component: VirtualScrollComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: '**', component: NotFoundComponent },
];
