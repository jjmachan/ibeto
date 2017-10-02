import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js'

@Component({
  selector: 'app-disease-detection',
  templateUrl: './disease-detection.component.html',
  styleUrls: ['./disease-detection.component.css']
})
export class DiseaseDetectionComponent implements OnInit {
  @ViewChild('myChart') myChild: ElementRef;
  constructor() { }

    ngOnInit() {
    }
}