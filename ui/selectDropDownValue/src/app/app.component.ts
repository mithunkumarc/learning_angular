import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedValue: any;
  countries = [{
    id: 1, name: 'France'
  },
  {
    id: 2, name: 'Germany'
  },
  {
    id: 3, name: 'Italy'
  },
  ];

  ngOnInit() {
    //set your country id here
    this.selectedValue=3;
  }  
}
