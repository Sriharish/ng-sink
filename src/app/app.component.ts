import {
  Component, ElementRef
} from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;
  navItems = [
    { route: 'home', name: 'Home' },
    { route: 'autocomplete', name: 'Autocomplete' },
    { route: 'badge', name: 'Badge' },
    { route: 'bottom-sheet', name: 'BottomSheet' },
    { route: 'baseline', name: 'Baseline' },
    { route: 'button', name: 'Button' },
    { route: 'button-toggle', name: 'ButtonToggle' },
    { route: 'card', name: 'Card' },
    { route: 'checkbox', name: 'Checkbox' },
    { route: 'chips', name: 'Chips' },
    { route: 'datepicker', name: 'Datepicker' },
    { route: 'dialog', name: 'Dialog' },
    { route: 'drawer', name: 'Drawer' },
    { route: 'drag-drop', name: 'DragDrop' },
    { route: 'expansion', name: 'Expansion' },
    { route: 'focus-origin', name: 'FocusOrigin' },
    { route: 'gestures', name: 'Gestures' },
    { route: 'grid-list', name: 'GridList' },
    { route: 'icon', name: 'Icon' },
    { route: 'input', name: 'Input' },
    { route: 'list', name: 'List' },
    { route: 'live-announcer', name: 'LiveAnnouncer' },
    { route: 'menu', name: 'Menu' },
    { route: 'paginator', name: 'Paginator' },
    { route: 'platform', name: 'Platform' },
    { route: 'portal', name: 'Portal' },
    { route: 'progress-bar', name: 'ProgressBar' },
    { route: 'progress-spinner', name: 'ProgressSpinner' },
    { route: 'radio', name: 'Radio' },
    { route: 'ripple', name: 'Ripple' },
    { route: 'select', name: 'Select' },
    { route: 'sidenav', name: 'Sidenav' },
    { route: 'slide-toggle', name: 'SlideToggle' },
    { route: 'slider', name: 'Slider' },
    { route: 'snack-bar', name: 'SnackBar' },
    { route: 'stepper', name: 'Stepper' },
    { route: 'table', name: 'Table' },
    { route: 'tabs', name: 'Tabs' },
    { route: 'toolbar', name: 'Toolbar' },
    { route: 'tooltip', name: 'Tooltip' },
    { route: 'tree', name: 'Tree' },
    { route: 'typography', name: 'Typography' },
    { route: 'expansion', name: 'Expansion' },
    { route: 'stepper', name: 'Stepper' },
    { route: 'screen-type', name: 'ScreenType' },
    { route: 'connected-overlay', name: 'ConnectedOverlay' },
    { route: 'virtual-scroll', name: 'VirtualScroll' },
    { route: 'examples', name: 'Examples' },
    { route: '**', name: 'NotFound' }
  ]
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */