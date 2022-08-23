import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() icon?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
