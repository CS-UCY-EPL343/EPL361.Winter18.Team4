import { Component, OnInit } from '@angular/core';
import { products_data } from './../data_products/data_merch'
@Component({
  selector: 'app-products-in-cart',
  templateUrl: './products-in-cart.component.html',
  styleUrls: ['./products-in-cart.component.css']
})
export class ProductsInCartComponent implements OnInit {

  products_marchedise = products_data;

  constructor() { }

  ngOnInit() {
  }

}
