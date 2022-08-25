import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormControlDirective, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }    
  ]
})
export class MaterialInputComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() icon?: string;
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
