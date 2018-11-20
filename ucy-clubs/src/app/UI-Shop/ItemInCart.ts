import { Product_Merch } from "./Product_Merch";
import { TouchSequence } from "selenium-webdriver";

export class ItemInCart{
  index;
  quantity;
  info:Product_Merch;

  constructor(id,q,i:Product_Merch){
    this.quantity=q;
    this.info = i;
    this.index=id;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}