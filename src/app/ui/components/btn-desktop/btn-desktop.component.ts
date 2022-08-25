import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-desktop',
  templateUrl: './btn-desktop.component.html',
  styleUrls: ['./btn-desktop.component.scss']
})
export class BtnDesktopComponent implements OnInit {

  @Input() text: string = 'Acceder';

  constructor() { }

  ngOnInit(): void {
  }

}
