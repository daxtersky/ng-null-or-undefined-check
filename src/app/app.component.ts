import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  // TODO:
// DISTINGUISH 3 STATES OF A VARIABLE WITH UNDEFINED AND NULL

  varNull;
  varDefined;

  ngOnInit() {
    console.log('varNull init', this.varNull);
    console.log('varDefined init', this.varDefined);


    setTimeout(() => {
    
      // WE RECEIVE (OR NOT) DATA FROM BACKEND
      console.log('--- a call to backend ---')
      this.varNull = [];
      this.varDefined = [3,54,99];

      if (this.varNull.length === 0) {
        this.varNull = null;
        console.log('varNull', this.varNull);
      } else {
        this.varNull = this.varNull[this.varNull.length - 1];
        console.log('varNull', this.varNull);
      }

      if (this.varDefined.length === 0) {
        this.varDefined = null;
        console.log('varDefined', this.varDefined);
      } else {
        this.varDefined = this.varDefined[this.varDefined.length - 1];
        console.log('varDefined', this.varDefined);
      }
    }, 900);

  }
}

