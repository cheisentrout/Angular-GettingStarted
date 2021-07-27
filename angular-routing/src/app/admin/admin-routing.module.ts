import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  /* Shortcut to render a path with children - a-route, select path with children */
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: UsersComponent },
      { path: 'blast', component: EmailBlastComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
