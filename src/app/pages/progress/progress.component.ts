import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress: number = 50;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    if (this.progress >= 100) {
      return;
    }
    this.changeProgress(1);
  }
  
  decrement() {
    if (this.progress <= 0) {
      return;
    }
    this.changeProgress(-1);
  }

  private changeProgress(value: number) {
    this.progress += value;
  }

}
