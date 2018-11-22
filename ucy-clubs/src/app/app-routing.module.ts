import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ShopComponent } from './UI-Shop/shop/shop.component';

const routes: Routes = [

  {path: 'e-shop', component: ShopComponent}, // OKAY
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
export const routingComponents = [ShopComponent]