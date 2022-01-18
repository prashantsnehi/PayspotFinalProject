import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { LeadsComponent } from './components/admin/leads/leads.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersComponent } from './components/admin/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '', canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'leads', component: LeadsComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
