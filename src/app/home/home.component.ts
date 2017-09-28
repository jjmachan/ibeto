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
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public doughnutChartLabels: string[] = ['days left','completed']
  public barChartType:string = 'bar';
  public doughnutChartType:string = 'doughnut';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
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

  	this.http.get("http://localhost:3000/data")
  	.subscribe(data => {
  		this.results = data;
  		console.log(this.results[0].sys.country)
  	});
}


}
