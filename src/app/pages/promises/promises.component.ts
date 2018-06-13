import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.countThreeSeconds()
    .then((message) => console.log('Terminó', message))
    .catch(error => console.log('Error in promise', error));
  }

  countThreeSeconds(): Promise<string> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        console.log(counter);
        if (counter === 3) {
          resolve('');
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
