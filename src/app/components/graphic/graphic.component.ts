import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styles: []
})
export class GraphicComponent implements OnInit {

  @Input() type: string = 'doughnut';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() legend: string = '';

  constructor() { }

  ngOnInit() {
  }

}
