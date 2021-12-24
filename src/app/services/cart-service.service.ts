import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  //Getter method
  getProducts(){
    return this.productList.asObservable();
  }

  //Setter method
  setProducts(){

  }

  //Add to cart
  addToCart(product: any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
  }

  //Total price
  getTotalPrice(){
    let grandTotal = 0;

    this.cartItemList.map((a:any) => {
      grandTotal += a.total;
    })

    return grandTotal;
  }

  //Remove item
  removeItem(){

  }

  //Remove all
  removeAll(){

  }
}
