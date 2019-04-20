/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Routes } from '@angular/router';

export const KITCHEN_SINK_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'autocomplete', loadChildren: './components/autocomplete/autocomplete.module#AutocompleteModule' },
  { path: 'badge', loadChildren: './components/badge/badge.module#BadgeModule' },
  { path: 'bottom-sheet', loadChildren: './components/bottom-sheet/bottom-sheet.module#BottomSheetModule' },
  { path: 'button', loadChildren: './components/button/button.module#ButtonModule' },
  { path: 'button-toggle', loadChildren: './components/button-toggle/button-toggle.module#ButtonToggleModule' },
  { path: 'card', loadChildren: './components/card/card.module#CardModule' },
  { path: 'checkbox', loadChildren: './components/checkbox/checkbox.module#CheckboxModule' },
  { path: 'connected-overlay', loadChildren: './components/connected-overlay/connected-overlay.module#ConnectedOverlayModule' },
  { path: 'chips', loadChildren: './components/chips/chips.module#ChipsModule' },
  { path: 'dataset', loadChildren: './components/dataset/dataset.module#DatasetModule' },
  { path: 'datepicker', loadChildren: './components/datepicker/datepicker.module#DatepickerModule' },
  { path: 'dialog', loadChildren: './components/dialog/dialog.module#DialogModule' },
  { path: 'drawer', loadChildren: './components/drawer/drawer.module#DrawerModule' },
  { path: 'drag-drop', loadChildren: './components/drag-drop/drag-drop.module#DragDropModule' },
  { path: 'expansion', loadChildren: './components/expansion/expansion.module#ExpansionModule' },
  { path: 'focus-origin', loadChildren: './components/focus-origin/focus-origin.module#FocusOriginModule' },
  { path: 'gestures', loadChildren: './components/gestures/gestures.module#GesturesModule' },
  { path: 'grid-list', loadChildren: './components/grid-list/grid-list.module#GridListModule' },
  { path: 'icon', loadChildren: './components/icon/icon.module#IconModule' },
  { path: 'input', loadChildren: './components/input/input.module#InputModule' },
  { path: 'list', loadChildren: './components/list/list.module#ListModule' },
  { path: 'live-announcer', loadChildren: './components/live-announcer/live-announcer.module#LiveAnnouncerModule' },
  { path: 'menu', loadChildren: './components/menu/menu.module#MenuModule' },
  { path: 'paginator', loadChildren: './components/paginator/paginator.module#PaginatorModule' },
  { path: 'platform', loadChildren: './components/platform/platform.module#PlatformModule' },
  { path: 'portal', loadChildren: './components/portal/portal.module#PortalModule' },
  { path: 'progress-bar', loadChildren: './components/progress-bar/progress-bar.module#ProgressBarModule' },
  { path: 'progress-spinner', loadChildren: './components/progress-spinner/progress-spinner.module#ProgressSpinnerModule' },
  { path: 'radio', loadChildren: './components/radio/radio.module#RadioModule' },
  { path: 'ripple', loadChildren: './components/ripple/ripple.module#RippleModule' },
  { path: 'select', loadChildren: './components/select/select.module#SelectModule' },
  { path: 'sidenav', loadChildren: './components/sidenav/sidenav.module#SidenavModule' },
  { path: 'slide-toggle', loadChildren: './components/slide-toggle/slide-toggle.module#SlideToggleModule' },
  { path: 'slider', loadChildren: './components/slider/slider.module#SliderModule' },
  { path: 'snack-bar', loadChildren: './components/snack-bar/snack-bar.module#SnackBarModule' },
  { path: 'stepper', loadChildren: './components/stepper/stepper.module#StepperModule' },
  { path: 'table', loadChildren: './components/table/table.module#TableModule' },
  { path: 'tabs', loadChildren: './components/tabs/tabs.module#TabsModule' },
  { path: 'toolbar', loadChildren: './components/toolbar/toolbar.module#ToolbarModule' },
  { path: 'tooltip', loadChildren: './components/tooltip/tooltip.module#TooltipModule' },
  { path: 'tree', loadChildren: './components/tree/tree.module#TreeModule' },
  { path: 'typography', loadChildren: './components/typography/typography.module#TypographyModule' },
  { path: 'screen-type', loadChildren: './components/screen-type/screen-type.module#ScreenTypeModule' },
  { path: 'virtual-scroll', loadChildren: './components/virtual-scroll/virtual-scroll.module#VirtualScrollModule' },
  { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
];
