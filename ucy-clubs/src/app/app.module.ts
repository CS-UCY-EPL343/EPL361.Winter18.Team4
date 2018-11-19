import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';
import { DanceClassesComponent } from './dance-classes/dance-classes.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsCatalogueComponent } from './products-catalogue/products-catalogue.component';
import { CartComponent } from './cart/cart.component';
import { ProductsInCartComponent } from './products-in-cart/products-in-cart.component';
import { ShopComponent } from './shop/shop.component';
import { ProductInCartComponent } from './product-in-cart/product-in-cart.component';

import { DataService } from './DataService'

import { SingUpComponent } from './sing-up/sing-up.component';
import {MatStepperModule} from '@angular/material/stepper';
import { LogInComponent } from './log-in/log-in.component';
import { SingupLoginComponent } from './singup-login/singup-login.component';


import {MatCheckboxModule, MatExpansionModule, MatGridListModule, MatTableModule, MatTabsModule} from '@angular/material';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent,
    DanceClassesComponent,
    ProductCardComponent,
    ProductsCatalogueComponent,
    CartComponent,
    ProductsInCartComponent,
    ShopComponent,
    ProductInCartComponent,
    DanceClassesComponent,
    DanceClassesComponent,
    SingUpComponent,
    LogInComponent,
    SingupLoginComponent,
    DanceClassesComponent,
    ContactUsComponent,
    AboutUsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  providers: [DataService], // Array, to have access from buttons
  bootstrap: [AppComponent] 
})
export class AppModule { }
