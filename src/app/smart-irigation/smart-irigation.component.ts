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
  lineOption: any = {
  	scaleShowVerticalLines: false,
  	responsive: false
  };
  lineLables: string[] = [];
  lineType: string = 'line';
  lineData: any[]=[];
  // events
  chartClicked(e:any):void {
    console.log(e);
  }
 
  chartHovered(e:any):void {
    console.log(e);
  }
 

  constructor() { }

  ngOnInit() {
  	this.lineData.push("hai") ;
  	console.log(this.lineData);
  }

}
