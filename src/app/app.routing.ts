import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { TrainingComponent } from './pages/training/training.component';
import { PredictComponent } from './pages/predict/predict.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: LandingPageComponent },
    { path: 'training',         component: TrainingComponent},
    { path: 'predict',          component: PredictComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
