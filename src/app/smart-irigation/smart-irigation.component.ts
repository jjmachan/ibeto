import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import Chart from 'chart.js';


@Component({
  selector: 'app-smart-irigation',
  templateUrl: './smart-irigation.component.html',
  styleUrls: ['./smart-irigation.component.css']
})
export class SmartIrigationComponent implements OnInit {
	 // precipitation watering graph

   barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType:string = 'line';
  barChartLegend:boolean = true;
  barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public barColors: any[] = [ {backgroundColor:['rgb(53,59,242)','rgb(96,184,246)']} ]
 
  chartClicked(e:any):void {
    console.log(e);
  }
 
  chartHovered(e:any):void {
    console.log(e);
  }
 

  constructor() { }

  ngOnInit() {
  }

}
