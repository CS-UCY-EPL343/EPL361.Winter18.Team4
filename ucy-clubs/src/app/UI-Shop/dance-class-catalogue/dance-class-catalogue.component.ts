import { Component, OnInit } from '@angular/core';
import { products_data } from './../data_products/data_classes'
@Component({
  selector: 'app-dance-class-catalogue',
  templateUrl: './dance-class-catalogue.component.html',
  styleUrls: ['./dance-class-catalogue.component.css']
})
export class DanceClassCatalogueComponent implements OnInit {

  products = products_data;
  constructor() { 
    console.log(this.products);
  }


  ngOnInit() {
  }

}
