import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../DataService'
import {ClassesCartComponent} from '../classes-cart/classes-cart.component'
import {Product_Class} from '../Product_Class'
@Component({
  selector: 'app-dance-class-product-in-cart',
  templateUrl: './dance-class-product-in-cart.component.html',
  styleUrls: ['./dance-class-product-in-cart.component.css']
})
export class DanceClassProductInCartComponent implements OnInit {

  @Input() item:Product_Class;
  constructor() { }

  ngOnInit() {
  }

  removeItem(item){
    let i = DataService.classesInCart.indexOf(item);
    DataService.classesInCart.splice(i,1);
    ClassesCartComponent.updateTotal();
  }
}
