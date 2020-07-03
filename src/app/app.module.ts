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
import {PrettyJsonModule} from 'angular2-prettyjson';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { DevicesComponent } from './pages/devices/devices.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { RulesComponent } from './pages/rules/rules.component';
import { RuleComponent } from './pages/rule/rule.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { AlertComponent } from './pages/alert/alert.component';
import { RolesComponent } from './pages/roles/roles.component';
import { NgJsonSchema } from 'ng-jsonschema';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { FormatComponent } from './pages/format/format.component';
import { UsersComponent } from './pages/users/users.component';
import { FormatsComponent } from './pages/formats/formats.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { FormatCodePipe } from './pipes/format-code.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { DeviceComponent } from './pages/device/device.component' 
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
    AlertComponent,
    RolesComponent,
    FormatComponent,
    UsersComponent,
    FormatsComponent,
    DefaultComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    FormatCodePipe,
    ProfileComponent,
    DeviceComponent
  ],
  imports: [
    PrettyJsonModule,
    NgJsonEditorModule,
    NgJsonSchema,
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
