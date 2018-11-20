import { Component, OnInit, Input } from '@angular/core';
import { Product_Merch } from '../Product_Merch';
import { ItemInCart } from '../ItemInCart';
import { DataService} from '../DataService'
import { CartComponent } from '../cart/cart.component'

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {

  quantity:number;

  @Input() item:ItemInCart;
  constructor() {
   }

  ngOnInit() {
    this.quantity = this.item.quantity;
  }


  removeItem(item){
    let i = DataService.itemsInCart.indexOf(item);
    DataService.itemsInCart.splice(i,1);
    CartComponent.updateTotal();
  }


  increaseQuantity(){
    this.item.quantity=this.item.quantity + 1;
    if(this.item.quantity<1){
      this.item.quantity=1;
    }
    this.quantity = this.item.quantity;
    CartComponent.updateTotal();
  }


  decreaseQuantity(){
    this.item.quantity=this.item.quantity - 1;
    if(this.item.quantity<1){
      this.item.quantity=1;
    }
    this.quantity = this.item.quantity;
    CartComponent.updateTotal();
  }

}
