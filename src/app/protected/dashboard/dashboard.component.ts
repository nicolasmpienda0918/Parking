import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [ 
    
    `
     * {
       
      margin: 20px !important;
     }
    `
  
  ]
})
export class DashboardComponent{

  constructor(private router: Router) { }


  logout() {
   this.router.navigateByUrl('/auth');
  }


}
