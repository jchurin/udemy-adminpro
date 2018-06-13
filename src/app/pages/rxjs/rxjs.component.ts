import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.countThreeSeconds()
    .pipe(
      retry(2) // Retry obs if fails
    ).subscribe(
      response => console.log('Subs', response),
      error => console.error('Error en el obs', error),
      () => console.warn('Observer finalizado')
    );
  }

  countThreeSeconds(): Observable<number> {
    return new Observable( observer => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        observer.next(counter);
        if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        } else if (counter === 2) {
          // clearInterval(interval);
          observer.error('ES UN 2 HELP!');
        }
      }, 1000);
    });
  }

}
