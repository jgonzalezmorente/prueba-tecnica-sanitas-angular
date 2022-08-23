import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialInputComponent } from './components/material-input/material-input.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    MaterialInputComponent,
    ToggleSwitchComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialInputComponent,
    ToggleSwitchComponent,
    ButtonComponent,
  ]
})
export class UiModule { }
