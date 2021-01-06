import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

addProductToCart = new BehaviorSubject("");
currentData = this.addProductToCart.asObservable();

constructor() { }

addProduct(product){
  this.addProductToCart.next(product)
}

}
