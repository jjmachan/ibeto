import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';


@Component({
  selector: 'app-smart-irigation',
  templateUrl: './smart-irigation.component.html',
  styleUrls: ['./smart-irigation.component.css']
})
export class SmartIrigationComponent implements OnInit {
	 // precipitation watering graph
  @ViewChild('waterInfo') waterInfo:ElementRef;

  constructor() { }

    ngOnInit() {
        let ctx = this.waterInfo.nativeElement.getContext('2d');

        var data = {
            labels: ['29.9.17', '30.9.17', '1.10.17', '2.10.17', '3.10.17', '4.10.17', '5.10.17'],
            datasets: [
                {
                    "label": ['Precipitation'],
                    "data": [18, 38, 82, 29, 18, 39, 26],   // Example data
                    "backgroundColor": "#1fc8f8"
                },
                                {
                    "label": ['Water Usage'],
                    "data": [70, 50, 25, 67, 68, 66, 51],
                    "backgroundColor": '#0066ff'
                  
                },
                {
                    "label": ['Temperature'],
                    "data": [18, 38, 82, 29, 18, 39, 26],   // Example data
                    "borderColor": '#000',
                    'type': 'line',
                    'fill': false
                }]

        };

        var chart = new Chart(
            ctx,
            {
                "type": 'bar',
                "data": data,
                "options": {
                    "cutoutPercentage": 50,
                    "animation": {
                        "animateScale": true,
                        "animateRotate": false
                    }
                }
            }
        );
    }
}
