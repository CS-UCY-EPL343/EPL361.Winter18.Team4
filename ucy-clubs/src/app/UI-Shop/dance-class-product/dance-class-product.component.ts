import { Component, OnInit, Input } from '@angular/core';
import { Product_Class } from '../Product_Class';
import { DataService } from '../DataService';
import { ClassesCartComponent } from '../classes-cart/classes-cart.component'
@Component({
  selector: 'app-dance-class-product',
  templateUrl: './dance-class-product.component.html',
  styleUrls: ['./dance-class-product.component.css']
})
export class DanceClassProductComponent implements OnInit {
  @Input() item:Product_Class;


  constructor() { }

  ngOnInit() {
  }


  addInCart(){
    DataService.classesInCart.push(this.item);
    ClassesCartComponent.updateTotal();
  }
}
