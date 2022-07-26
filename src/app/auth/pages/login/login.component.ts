import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [  
  ]

})
export class LoginComponent  {

  miFormulario: FormGroup = this.fb.group({
    email:    ['usuario01@gmail.com', [ Validators.required, Validators.email]],
    password: ['user123456', [ Validators.required, Validators.minLength(6)]]
  });

  constructor( private fb: FormBuilder,
               private router:Router,
               private authService: AuthService) { }


  login() {
    console.log(this.miFormulario.value);

    const { email, password}  = this.miFormulario.value;
    
    this.authService.login( email, password)
     .subscribe(rep =>  { console.log(rep)});
    
     //this.router.navigateByUrl('/dashboard');

  }

}
