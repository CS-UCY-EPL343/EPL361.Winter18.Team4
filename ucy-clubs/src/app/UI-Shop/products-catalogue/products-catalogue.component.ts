import { Component, OnInit, Input } from '@angular/core';
import { products_data } from './../data_products/data_merch'
import { Product_Merch } from './../Product_Merch' 

@Component({
  selector: 'app-products-catalogue',
  templateUrl: './products-catalogue.component.html',
  styleUrls: ['./products-catalogue.component.css']
})
export class ProductsCatalogueComponent implements OnInit {

  products = products_data;
  
  constructor() { 
    console.log(this.products);
  }

  ngOnInit() {


  }

}
