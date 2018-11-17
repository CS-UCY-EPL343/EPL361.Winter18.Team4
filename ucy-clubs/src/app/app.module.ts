import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';
import { DanceClassesComponent } from './dance-classes/dance-classes.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { MatToolbarModule } from '@angular/material/toolbar';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent,
    DanceClassesComponent,
    ContactUsComponent,
    AboutUsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
