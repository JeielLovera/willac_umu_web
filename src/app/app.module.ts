import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';


import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './services/upload.service';

import { AngularFireModule } from '@angular/fire'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { TrainingComponent } from './pages/training/training.component';
import { PredictComponent } from './pages/predict/predict.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TrainingComponent,
    PredictComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
