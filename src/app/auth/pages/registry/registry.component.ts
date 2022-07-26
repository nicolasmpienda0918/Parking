import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styles: [
  ]
})
export class RegistryComponent  {

  miFormulario: FormGroup = this.fb.group({
    name:    ['Carlos Perez', [ Validators.required ]],
    email:    ['usuario2@gmail.com', [ Validators.required, Validators.email]],
    password: ['usuario1234567', [ Validators.required, Validators.minLength(6)]],
  });

  constructor( private fb: FormBuilder , 
               private router: Router) { }

  registry() {
    console.log(this.miFormulario.value);
   

    this.router.navigateByUrl('/dashboard');

  }
  

}
