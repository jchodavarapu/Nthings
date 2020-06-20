import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { RulesComponent } from './pages/rules/rules.component';
import { RuleComponent } from './pages/rule/rule.component';
import { AlertComponent } from './pages/alert/alert.component';
import { AlertsComponent } from './pages/alerts/alerts.component';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'devices', component: DevicesComponent, pathMatch: 'full' },
  { path: 'channels', component: ChannelsComponent, pathMatch: 'full' },
  { path: 'rules', component: RulesComponent, pathMatch: 'full' },
  { path: 'rule', component: RuleComponent, pathMatch: 'full' },
  { path: 'alerts', component: AlertsComponent, pathMatch: 'full' },
  { path: 'alert', component: AlertComponent, pathMatch: 'full' },
  { path: '*', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
