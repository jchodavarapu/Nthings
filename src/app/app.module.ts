import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QueryBuilderModule } from "angular2-query-builder";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider/icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { DevicesComponent } from './pages/devices/devices.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { RulesComponent } from './pages/rules/rules.component';
import { RuleComponent } from './pages/rule/rule.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { AlertComponent } from './pages/alert/alert.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DevicesComponent,
    ChannelsComponent,
    RulesComponent,
    RuleComponent,
    AlertsComponent,
    AlertComponent
  ],
  imports: [
    QueryBuilderModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
