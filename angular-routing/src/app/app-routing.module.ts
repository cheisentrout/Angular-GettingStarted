/*==========================================
ANGULAR MODULES
===========================================*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*==========================================
CUSTOM COMPONENTS
===========================================*/

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';

// Here is where you add all routes for an application:
// - use Angular Essentials shortcuts (a-path) to add paths
// the path key links to a string of what will appear in the URL
// the component key tells the path which component to render at that endpoint

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
