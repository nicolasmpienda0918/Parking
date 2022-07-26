import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styles: [
  ]
})
export class CellsComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  
  logout() {
    

    this.router.navigateByUrl('/auth/login');

  }

  

}
