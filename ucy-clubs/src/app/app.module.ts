import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';
import { DanceClassComponent } from './dance-class/dance-class.component';
import { DanceClassesComponent } from './dance-classes/dance-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent,
    DanceClassComponent,
    DanceClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
