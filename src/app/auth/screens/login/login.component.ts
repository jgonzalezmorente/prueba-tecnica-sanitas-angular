import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ValidatorService } from '../../../shared/services/validator.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public smallScreen: boolean = true;
  public loginForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    password: ['', [ Validators.required, Validators.minLength(5) ] ],
    remindMe: [false, Validators.required],
  });

  constructor( private breakpointObserver: BreakpointObserver,
               private fb: FormBuilder,
               private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 960px)']).subscribe(
      state => this.smallScreen = !state.matches
    );

    this.loginForm.controls['remindMe'].valueChanges.subscribe(
      remindMe => {
        if ( remindMe ) {
          const email = this.loginForm.controls['email'].value.trim();
          const valid = this.loginForm.controls['email'].valid;
          if ( email && valid ) {
            localStorage.setItem('email', email);
            localStorage.setItem('remindMe', remindMe);
          }
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('remindMe');
        }
      }
    );

    const email = localStorage.getItem('email') ?? '';
    const remindMe = localStorage.getItem('remindMe') ?? false;

    this.loginForm.reset({
      email, remindMe      
    });     
  }

  get errorMsgEmail(): string {
    const errors = Object.keys( this.loginForm.get('email')?.errors ?? {} );
    if ( errors.includes( 'required' ) ) {
      return 'El email es requerido.';
    } else {
      return 'El email introducido no es válido.';
    }
  }

  hasError( field: string ): boolean {
    return ( this.loginForm.get(field)?.touched && this.loginForm.get( field )?.invalid ) || false;
  }  

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log('OK');
    this.loginForm.reset();
  }


}
