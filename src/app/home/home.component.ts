import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public barChartLabels:string[] = ['29.9.17', '30.9.17', '1.10.17', '2.10.17', '3.10.17', '4.10.17', '5.10.17'];
  public doughnutChartLabels: string[] = ['days left','completed']
  public barChartType:string = 'line';
  public doughnutChartType:string = 'doughnut';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Humidity'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Temperature'},
    {data: [59, 88, 20, 69, 26, 27, 50], label: 'Pressure'}
  ];
  public days : number = 90;
  public doughnutChartData: any[] = [
  	{data: [this.days,100-this.days] }
  ]; 
  public doughnutChartColor: any[] = [
  	{backgroundColor:['rgb(87, 205, 67)','#fff']} ]
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  results: any;
  constructor(private http: HttpClient) { }


  ngOnInit() { 
  	let URL: string = "http://api.openweathermap.org/data/2.5/weather?id=1273874&appid=1525ad2cc885ea19da708dcc43b08420";

  	this.http.get(URL)
  	.subscribe(data => {
  		this.results = data;
  		console.log(this.results[0].sys.country)
  	});
}


}
