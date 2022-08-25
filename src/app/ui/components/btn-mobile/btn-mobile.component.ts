import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-mobile',
  templateUrl: './btn-mobile.component.html',
  styleUrls: ['./btn-mobile.component.scss']
})
export class BtnMobileComponent implements OnInit {

  @Input() text: string = 'Acceder';

  constructor() { }

  ngOnInit(): void {
  }

}
