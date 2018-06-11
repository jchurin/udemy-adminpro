import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {

  @Input() legend: string = 'Legend';
  @Input() progress: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  private incrementQuantity: number = 5;

  constructor() { }

  ngOnInit() {
  }

  onChange(newValue: number) {

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.changeValue.emit(this.progress);
  }

  increment() {
    if (this.progress >= 100) {
      return;
    }
    this.changeProgress(this.incrementQuantity);
  }

  decrement() {
    if (this.progress <= 0) {
      return;
    }
    this.changeProgress(this.incrementQuantity * -1);
  }

  private changeProgress(value: number) {
    this.progress += value;
    this.changeValue.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }

}
