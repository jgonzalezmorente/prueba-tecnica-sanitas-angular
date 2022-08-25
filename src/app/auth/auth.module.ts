import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { AuthRoutingModule } from './auth-routing.module';
import { UiModule } from '../ui/ui.module';
import { LoginComponent } from './screens/login/login.component';
import { AuthComponent } from './auth.component';
import { LogoComponent } from './components/logo/logo.component';
import { TitleComponent } from './components/title/title.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    LogoComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    UiModule,
    SharedModule
  ]
})
export class AuthModule { }
