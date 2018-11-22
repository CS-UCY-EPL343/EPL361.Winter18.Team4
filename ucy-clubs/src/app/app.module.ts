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
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './UI-Shop/product-card/product-card.component';
import { ProductsCatalogueComponent } from './UI-Shop/products-catalogue/products-catalogue.component';
import { CartComponent } from './UI-Shop/cart/cart.component';
import { ProductsInCartComponent } from './UI-Shop/products-in-cart/products-in-cart.component';
import { ShopComponent } from './UI-Shop/shop/shop.component';
import { ProductInCartComponent } from './UI-Shop/product-in-cart/product-in-cart.component';

import { DataService } from './UI-Shop/DataService'
import { VoteComponent } from './vote/vote.component';
import { DanceClassesComponent } from './dance-classes/dance-classes.component';
import {MatButtonModule, MatDialogModule} from "@angular/material";
import { DialogConfirmVoteComponent } from './vote/dialog-confirm-vote/dialog-confirm-vote.component';
import {MatButtonModule} from "@angular/material";
import { SingUpComponent } from './sing-up/sing-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingupLoginComponent } from './singup-login/singup-login.component';

import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule, MatTableModule, MatTabsModule} from '@angular/material';
import { NewsComponent } from './news/news.component';
import { ClubsComponent } from './clubs/clubs.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsCatalogueComponent,
    CartComponent,
    ProductsInCartComponent,
    ShopComponent,
    ProductInCartComponent,
    VoteComponent,
    DanceClassesComponent,
    DialogConfirmVoteComponent,
    DanceClassesComponent,
    SingUpComponent,
    LogInComponent,
    SingupLoginComponent,
    NewsComponent,
    ClubsComponent
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
    MatDialogModule
  ],
  entryComponents:
  [
    DialogConfirmVoteComponent,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
