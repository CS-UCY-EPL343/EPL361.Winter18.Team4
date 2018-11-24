import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import {FlexLayoutModule} from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion'
import { MatListModule  } from '@angular/material/list'
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './UI-Shop/product-card/product-card.component';
import { ProductsCatalogueComponent } from './UI-Shop/products-catalogue/products-catalogue.component';
import { CartComponent } from './UI-Shop/cart/cart.component';
import { ProductsInCartComponent } from './UI-Shop/products-in-cart/products-in-cart.component';
import { ShopComponent } from './UI-Shop/shop/shop.component';
import { ProductInCartComponent } from './UI-Shop/product-in-cart/product-in-cart.component';

import { DataService } from './UI-Shop/DataService'
import { VoteComponent } from './vote/vote.component';

import {MatButtonModule, MatDialogModule} from "@angular/material";
import { DialogConfirmVoteComponent } from './vote/dialog-confirm-vote/dialog-confirm-vote.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingupLoginComponent } from './singup-login/singup-login.component';

import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule, MatTableModule, MatTabsModule} from '@angular/material';
import { NewsComponent } from './news/news.component';
import { ClubsComponent } from './clubs/clubs.component';
import { DanceClubComponent } from './dance-club/dance-club.component';
import { ContactUsDanceComponent } from './contact-us-dance/contact-us-dance.component';
import { AboutUsDanceComponent } from './about-us-dance/about-us-dance.component';
import { GalleryComponent } from './gallery/gallery.component';


import {MatIconModule} from '@angular/material/icon';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';




import {SlideshowModule} from 'ng-simple-slideshow';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DanceClassProductComponent } from './UI-Shop/dance-class-product/dance-class-product.component';
import { DanceClassCatalogueComponent } from './UI-Shop/dance-class-catalogue/dance-class-catalogue.component';
import { DanceClassProductInCartComponent } from './UI-Shop/dance-class-product-in-cart/dance-class-product-in-cart.component';
import { ClassesCartComponent } from './UI-Shop/classes-cart/classes-cart.component';
import { ClassesShopComponent } from './UI-Shop/classes-shop/classes-shop.component';
import { DanceClassProductsInCartComponent } from './UI-Shop/dance-class-products-in-cart/dance-class-products-in-cart.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductCardComponent,
    ProductsCatalogueComponent,
    CartComponent,
    ProductsInCartComponent,
    ProductInCartComponent,
    VoteComponent,
    DialogConfirmVoteComponent,
    SingUpComponent,
    LogInComponent,
    SingupLoginComponent,
    NewsComponent,
    ClubsComponent,
    DanceClubComponent,
    ContactUsDanceComponent,
    AboutUsDanceComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    SlideshowComponent,
    DanceClassProductComponent,
    DanceClassCatalogueComponent,
    DanceClassProductInCartComponent,
    ClassesCartComponent,
    ClassesShopComponent,
    DanceClassProductsInCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    SlideshowModule,
  ],
  entryComponents:
  [
    DialogConfirmVoteComponent

  ],
  providers: [DataService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
