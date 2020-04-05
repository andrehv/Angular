import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('chartLabels') doughnutChartLabels: string[] = [];
  // tslint:disable-next-line: no-input-rename
  @Input('chartData') doughnutChartData: number[] = [];
  // tslint:disable-next-line: no-input-rename
  @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
