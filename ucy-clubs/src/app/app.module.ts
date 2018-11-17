import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';
import { DanceClassesComponent } from './dance-classes/dance-classes.component';
import { UcyDashboardComponent } from './ucy-dashboard/ucy-dashboard.component';
import {MatButtonModule} from "@angular/material";
import {MatListModule} from "@angular/material";

import { DanceClubComponent } from './dance-club/dance-club.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent,
    DanceClassesComponent,
    UcyDashboardComponent,
    DanceClubComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
