import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { UiModule } from '../ui/ui.module';
import { LoginComponent } from './screens/login/login.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    AuthRoutingModule,
    LayoutModule
  ]
})
export class AuthModule { }
