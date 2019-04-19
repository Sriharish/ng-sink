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
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'autocomplete', loadChildren: './autocomplete/autocomplete.module#AutocompleteModule' },
  { path: 'badge', loadChildren: './badge/badge.module#BadgeModule' },
  { path: 'bottom-sheet', loadChildren: './bottom-sheet/bottom-sheet.module#BottomSheetModule' },
  { path: 'button', loadChildren: './button/button.module#ButtonModule' },
  { path: 'button-toggle', loadChildren: './button-toggle/button-toggle.module#ButtonToggleModule' },
  { path: 'card', loadChildren: './card/card.module#CardModule' },
  { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxModule' },
  { path: 'connected-overlay', loadChildren: './connected-overlay/connected-overlay.module#ConnectedOverlayModule' },
  { path: 'chips', loadChildren: './chips/chips.module#ChipsModule' },
  { path: 'dataset', loadChildren: './dataset/dataset.module#DatasetModule' },
  { path: 'datepicker', loadChildren: './datepicker/datepicker.module#DatepickerModule' },
  { path: 'dialog', loadChildren: './dialog/dialog.module#DialogModule' },
  { path: 'drawer', loadChildren: './drawer/drawer.module#DrawerModule' },
  { path: 'drag-drop', loadChildren: './drag-drop/drag-drop.module#DragDropModule' },
  { path: 'expansion', loadChildren: './expansion/expansion.module#ExpansionModule' },
  { path: 'focus-origin', loadChildren: './focus-origin/focus-origin.module#FocusOriginModule' },
  { path: 'gestures', loadChildren: './gestures/gestures.module#GesturesModule' },
  { path: 'grid-list', loadChildren: './grid-list/grid-list.module#GridListModule' },
  { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
  { path: 'input', loadChildren: './input/input.module#InputModule' },
  { path: 'list', loadChildren: './list/list.module#ListModule' },
  { path: 'live-announcer', loadChildren: './live-announcer/live-announcer.module#LiveAnnouncerModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
  { path: 'paginator', loadChildren: './paginator/paginator.module#PaginatorModule' },
  { path: 'platform', loadChildren: './platform/platform.module#PlatformModule' },
  { path: 'portal', loadChildren: './portal/portal.module#PortalModule' },
  { path: 'progress-bar', loadChildren: './progress-bar/progress-bar.module#ProgressBarModule' },
  { path: 'progress-spinner', loadChildren: './progress-spinner/progress-spinner.module#ProgressSpinnerModule' },
  { path: 'radio', loadChildren: './radio/radio.module#RadioModule' },
  { path: 'ripple', loadChildren: './ripple/ripple.module#RippleModule' },
  { path: 'select', loadChildren: './select/select.module#SelectModule' },
  { path: 'sidenav', loadChildren: './sidenav/sidenav.module#SidenavModule' },
  { path: 'slide-toggle', loadChildren: './slide-toggle/slide-toggle.module#SlideToggleModule' },
  { path: 'slider', loadChildren: './slider/slider.module#SliderModule' },
  { path: 'snack-bar', loadChildren: './snack-bar/snack-bar.module#SnackBarModule' },
  { path: 'stepper', loadChildren: './stepper/stepper.module#StepperModule' },
  { path: 'table', loadChildren: './table/table.module#TableModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsModule' },
  { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarModule' },
  { path: 'tooltip', loadChildren: './tooltip/tooltip.module#TooltipModule' },
  { path: 'tree', loadChildren: './tree/tree.module#TreeModule' },
  { path: 'typography', loadChildren: './typography/typography.module#TypographyModule' },
  { path: 'screen-type', loadChildren: './screen-type/screen-type.module#ScreenTypeModule' },
  { path: 'virtual-scroll', loadChildren: './virtual-scroll/virtual-scroll.module#VirtualScrollModule' },
  { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' },
];
