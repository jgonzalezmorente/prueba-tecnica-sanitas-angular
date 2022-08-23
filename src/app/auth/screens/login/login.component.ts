import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private breakpointObserver: BreakpointObserver ) { }


  public smallScreen: boolean = true;

  // @ViewChild('logo') logo?: ElementRef;
  // @ViewChild('container') container?: ElementRef;
  // @ViewChild('form') form?: ElementRef;
  // @ViewChild('title') title?: ElementRef;
  // @ViewChild('titleText') titleText?: ElementRef;

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 960px)']).subscribe(
      state => this.smallScreen = !state.matches
    );
            
  } 


}
