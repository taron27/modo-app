import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidateService } from './auth/register/validate.service';
import { ProfileService } from './dashboard/diet-info/shared/profile.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ValidateService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


firebase.initializeApp({
  apiKey: 'AIzaSyBHHtVkybduI0dF7WwtKuehn7WyQMae3ko',
  authDomain: 'energyroll-1538412107519.firebaseapp.com',
  databaseURL: 'https://energyroll-1538412107519.firebaseio.com',
  projectId: 'energyroll-1538412107519',
  storageBucket: 'energyroll-1538412107519.appspot.com',
  messagingSenderId: '850546783600'
});

firebase.firestore().settings({
  timestampsInSnapshots: true
});
