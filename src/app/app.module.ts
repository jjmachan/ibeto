import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SmartIrigationComponent } from './smart-irigation/smart-irigation.component';
import { DiseaseDetectionComponent } from './disease-detection/disease-detection.component';

const appRoute: Routes = [
	{ path:'home', component: HomeComponent },
	{ path:'', redirectTo: '/home', pathMatch: 'full' },
	{ path:'SmartIrigation', component: SmartIrigationComponent },
	{ path: 'DiseaseDetection', component: DiseaseDetectionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SmartIrigationComponent,
    DiseaseDetectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
    	appRoute,
    	{enableTracing: true }
    	),
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
