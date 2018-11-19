import { Component, OnInit, Input } from '@angular/core';
import { Product_Merch } from '../Product_Merch';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {

  @Input() info:Product_Merch;

  constructor() { }

  ngOnInit() {
  }

}
