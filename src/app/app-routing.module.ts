import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { RulesComponent } from './pages/rules/rules.component';
import { RuleComponent } from './pages/rule/rule.component';
import { AlertComponent } from './pages/alert/alert.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { FormatComponent } from './pages/format/format.component';
import { FormatsComponent } from './pages/formats/formats.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotComponent } from './pages/forgot/forgot.component'
import { ProfileComponent } from './pages/profile/profile.component';

import { DefaultComponent } from './layouts/default/default.component';
import { AuthComponent } from './layouts/auth/auth.component';

import { AuthGuard } from "./auth.guard"

const routes: Routes = [
  // { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', data: { breadcrumb: 'dashboard' }, component: DashboardComponent, pathMatch: 'full' },
      { path: 'devices', data: { breadcrumb: 'things / devices' }, component: DevicesComponent, pathMatch: 'full' },
      { path: 'channels', data: { breadcrumb: 'things / channels' }, component: ChannelsComponent, pathMatch: 'full' },
      { path: 'rules', data: { breadcrumb: 'rules' }, component: RulesComponent, pathMatch: 'full' },
      { path: 'rule', data: { breadcrumb: 'rule' }, component: RuleComponent, pathMatch: 'full' },
      { path: 'alerts', data: { breadcrumb: 'alerts' }, component: AlertsComponent, pathMatch: 'full' },
      { path: 'alert', data: { breadcrumb: 'alert' }, component: AlertComponent, pathMatch: 'full' },
      { path: 'roles', data: { breadcrumb: 'configure / roles' }, component: RolesComponent, pathMatch: 'full' },
      { path: 'users', data: { breadcrumb: 'configure / users' }, component: UsersComponent, pathMatch: 'full' },
      { path: 'format', data: { breadcrumb: 'configure / format' }, component: FormatComponent, pathMatch: 'full' },
      { path: 'formats', data: { breadcrumb: 'configure / formats' }, component: FormatsComponent, pathMatch: 'full' },
      { path: 'profile', data: { breadcrumb: 'profile' }, component: ProfileComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent, pathMatch: 'full' },
      { path: 'signup', component: SignupComponent, pathMatch: 'full' },
      { path: 'forgot-password', component: ForgotComponent, pathMatch: 'full' },
    ]
  },
  // { path: '*', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
