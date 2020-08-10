import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  // TODO: DISTINGUISH 3 STATES OF A VARIABLE WITH UNDEFINED AND NULL

  willNotReceiveData;
  willReceiveData;

  ngOnInit() {
    console.log('willNotReceiveData init', this.willNotReceiveData);
    console.log('willReceiveData init', this.willReceiveData);

    setTimeout(() => {
    
      // WE RECEIVE (OR NOT) DATA FROM BACKEND
      const backendNoData = [];
      const backendData = [3,54,99];
      console.log('--- a call to backend ---')
      this.willNotReceiveData = backendNoData;
      this.willReceiveData = backendData;

      if (backendNoData.length === 0) {
        this.willNotReceiveData = null;
        console.log('willNotReceiveData', this.willNotReceiveData);
      } else {
        this.willNotReceiveData = backendNoData[backendNoData.length - 1];
        console.log('willNotReceiveData', this.willNotReceiveData);
      }

      if (backendData.length === 0) {
        this.willReceiveData = backendData;
        console.log('willReceiveData', this.willReceiveData);
      } else {
        this.willReceiveData = backendData[backendData.length - 1];
        console.log('willReceiveData', this.willReceiveData);
      }
    }, 900);

  }
}

