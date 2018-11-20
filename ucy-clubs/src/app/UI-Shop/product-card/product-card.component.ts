import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product_Merch } from '../Product_Merch';
import { ItemInCart} from '../ItemInCart';
import { DataService} from '../DataService';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() index:Number;
  @Input() info:Product_Merch;
  

  quantity=1;

  increaseQuantity(){
    this.quantity=this.quantity + 1;
    if(this.quantity<1){
      this.quantity=1;
    }
  }


  decreaseQuantity(){
    this.quantity=this.quantity - 1;
    if(this.quantity<1){
      this.quantity=1;
    }
  }


  addInCart(){
    let item:ItemInCart = new ItemInCart(this.index,this.quantity,this.info);
    DataService.itemsInCart.push(item);
    CartComponent.updateTotal();
  }



  constructor() {

   }



  ngOnInit() {
    console.log(this.info);
    console.log(this.info.title);
  }

}
