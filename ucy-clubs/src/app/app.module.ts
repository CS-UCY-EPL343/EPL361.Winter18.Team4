import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
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
    ProductInCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [DataService], // Array, to have access from buttons
  bootstrap: [AppComponent] 
})
export class AppModule { }
