import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService'
@Component({
  selector: 'app-dance-class-products-in-cart',
  templateUrl: './dance-class-products-in-cart.component.html',
  styleUrls: ['./dance-class-products-in-cart.component.css']
})
export class DanceClassProductsInCartComponent implements OnInit {

  itemsInCart = DataService.classesInCart;
  constructor() { }

  ngOnInit() {
  }

}
