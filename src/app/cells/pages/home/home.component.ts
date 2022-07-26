import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ `
  .container { margin: 20px;

  }
  
  `
  ]
})
export class HomeComponent  {

  constructor( private router: Router) { }

 

  logout() {
    this.router.navigateByUrl('/auth/login');
   }
 

}
