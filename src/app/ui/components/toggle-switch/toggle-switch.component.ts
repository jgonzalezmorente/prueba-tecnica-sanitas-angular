import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }    
  ]  
})
export class ToggleSwitchComponent implements OnInit {

  @Input() label: string = '';
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
