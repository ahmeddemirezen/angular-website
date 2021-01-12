import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name = 'Home';

  constructor() { }

  ngOnInit(): void {
  }

  Test(): number {    
    return 2 + 7;    
  } 
}

