import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialInputComponent } from './components/material-input/material-input.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { BtnMobileComponent } from './components/btn-mobile/btn-mobile.component';
import { BtnDesktopComponent } from './components/btn-desktop/btn-desktop.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MaterialInputComponent,
    ToggleSwitchComponent,
    BtnMobileComponent,
    BtnDesktopComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialInputComponent,
    ToggleSwitchComponent,
    BtnMobileComponent,
    BtnDesktopComponent
  ]
})
export class UiModule { }
