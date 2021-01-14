import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: any[] = [{
    "name": "ahmed",
    "description": "its a test"
  },
  {
    "name" : "mahmud",
    "description" : "its a test 2"
  },
  {
    "name" : "mahmud",
    "description" : "its a test 2"
  },
  {
    "name" : "mahmud",
    "description" : "its a test 2"
  },
  {
    "name" : "mahmud",
    "description" : "its a test 2"
  },
  {
    "name" : "mahmud",
    "description" : "its a test 2"
  }
  ];

}
