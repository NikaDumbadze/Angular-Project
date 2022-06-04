import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  pageTitle: string = 'Demo App'

  constructor() { }

  ngOnInit(): void {
  }

  clickedLogout(){
    
  }

}
