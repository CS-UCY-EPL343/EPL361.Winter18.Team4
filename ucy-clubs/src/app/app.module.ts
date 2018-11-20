import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './UI-Shop/product-card/product-card.component';
import { ProductsCatalogueComponent } from './UI-Shop/products-catalogue/products-catalogue.component';
import { CartComponent } from './UI-Shop/cart/cart.component';
import { ProductsInCartComponent } from './UI-Shop/products-in-cart/products-in-cart.component';
import { ShopComponent } from './UI-Shop/shop/shop.component';
import { ProductInCartComponent } from './UI-Shop/product-in-cart/product-in-cart.component';

import { DataService } from './UI-Shop/DataService'


@NgModule({
  declarations: [
    AppComponent,
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
  providers: [DataService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
