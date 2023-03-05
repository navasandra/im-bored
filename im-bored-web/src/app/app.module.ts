import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ActivitiesPageComponent } from './components/activities-page/activities-page.component';
import { ActivityCardComponent } from './components/stand-alone-components/activity-card/activity-card.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditFormComponent } from './components/stand-alone-components/edit-form/edit-form.component';
@NgModule({
  declarations: [AppComponent, LandingPageComponent, ActivitiesPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ActivityCardComponent,
    EditFormComponent,
    DialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
