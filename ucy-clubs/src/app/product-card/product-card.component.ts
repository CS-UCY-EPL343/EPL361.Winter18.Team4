import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product_Merch } from '../Product_Merch';
import { DataService} from '../DataService';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() id:Number;
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
    // Add information in array
    console.log(this.id.toString());
    console.log(this.info.title);
    DataService.itemsInCart.push(this.id);
    console.log(DataService.itemsInCart);
  }


  constructor() {

   }



  ngOnInit() {
    console.log(this.id);
    console.log(this.info);
    console.log(this.info.title);
  }

}
