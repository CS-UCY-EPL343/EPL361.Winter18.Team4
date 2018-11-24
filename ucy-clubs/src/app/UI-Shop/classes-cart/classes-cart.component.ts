import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService';

@Component({
  selector: 'app-classes-cart',
  templateUrl: './classes-cart.component.html',
  styleUrls: ['./classes-cart.component.css']
})
export class ClassesCartComponent implements OnInit {
  static totalPrice:number = 0;
  constructor() { }

  ngOnInit() {
  }


  static updateTotal(){
    this.totalPrice = 0;
    let items = DataService.classesInCart;
    for (let index = 0; index < items.length; index++) {
      this.totalPrice = this.totalPrice +  items[index].price;
    }
  }

  get staticTotalPrice(){
    return ClassesCartComponent.totalPrice; 
  }



}
