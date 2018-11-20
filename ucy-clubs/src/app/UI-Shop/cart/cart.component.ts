import { Component, OnInit } from '@angular/core';
import { DataService} from '../DataService'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  static totalPrice:number = 0;
  constructor() {
    CartComponent.totalPrice=0;
   }

  ngOnInit() {
  }


  static updateTotal(){
    this.totalPrice = 0;
    let items = DataService.itemsInCart;
    for (let index = 0; index < items.length; index++) {
      this.totalPrice = this.totalPrice +  (items[index].quantity)*(items[index].info.price);
    }
  }

  get staticTotalPrice(){
    return CartComponent.totalPrice; 
  }

}
