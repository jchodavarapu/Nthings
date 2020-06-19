import { Component, OnInit } from '@angular/core';
import { DashStat } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: Observable<DashStat[]>


  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Temperature' },
  ];
  lineChartLabels: Label[] = [];
  lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}]
    },
    annotation: {
      annotations: [
      ],
    },
  };
  lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(0,255,0,0.3)',
      borderColor: 'green',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [pluginAnnotations];


  lineChartData2: ChartDataSets[] = [
    { data: [], label: 'Proximity' },
  ];
  lineChartLabels2: Label[] = [];
  lineChartOptions2: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}]
    },
    annotation: {
      annotations: [
      ],
    },
  };
  lineChartColors2: Color[] = [
    { // blue
      backgroundColor: 'rgba(0,0,255,0.3)',
      borderColor: 'blue',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend2 = true;
  lineChartType2 = 'line';
  lineChartPlugins2 = [pluginAnnotations];

  constructor() { }

  ngOnInit() {
    var that = this
    let random = (min, max) => Math.ceil(Math.random() * (max - min) + min)
    let toTimeString = () => (new Date()).toLocaleTimeString();
    setTimeout(() => {
      that.stats = from([[
        { key: 'things', value: 12 },
        { key: 'channels', value: 2 },
        { key: 'gateways', value: 8 },
        { key: 'lora devices', value: 1 },
        { key: 'rules', value: 30 },
        { key: 'alerts', value: 20 },
      ]])
    }, 1000);

    setInterval(() => {
      //Temp
      that.lineChartData[0].data.push(random(5, 50))
      that.lineChartLabels.push(toTimeString())
      //Prox
      that.lineChartData2[0].data.push(random(45, 65))
      that.lineChartLabels2.push(toTimeString())

      setTimeout(() => {
        if (that.lineChartLabels.length >= 10) {
          //Temp
          that.lineChartLabels.shift()
          that.lineChartData[0].data.shift()
          //Prox
          that.lineChartLabels2.shift()
          that.lineChartData2[0].data.shift()
        }
      }, 0)
    }, 500)
  }

}
