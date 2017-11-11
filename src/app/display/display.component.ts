import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

firstName: String;
  lastName: String;
  title: String;
  constructor() { }

  ngOnInit() {
    this.firstName = 'Srinivas';
    this.lastName = 'Raghavan';
  }
getDetails(fName, lName) {
  this.title = fName.value + ' ' + lName.value;
}
}
