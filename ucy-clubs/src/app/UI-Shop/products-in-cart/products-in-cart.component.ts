import { Component, OnInit } from '@angular/core';
import { DataService } from './../DataService'
@Component({
  selector: 'app-products-in-cart',
  templateUrl: './products-in-cart.component.html',
  styleUrls: ['./products-in-cart.component.css']
})
export class ProductsInCartComponent implements OnInit {
  
  itemsInCart = DataService.itemsInCart;

  constructor() { }

  ngOnInit() {
  }

}
