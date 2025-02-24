import { Routes } from '@angular/router';
import { FlexbComponent } from './flexb/flexb.component';
import { GridbComponent } from './gridb/gridb.component';

export const routes: Routes = [
    { path: 'gridb', component: GridbComponent },  // Loads GridbComponent when navigating to /gridb
  { path: 'flexb', component: FlexbComponent },  // Loads FlexbComponent when navigating to /flexb
  { path: '', redirectTo: 'gridb', pathMatch: 'full' },
];
