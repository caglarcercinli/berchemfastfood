import { Injectable } from '@angular/core';
import {Product} from './product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[]= [];
   private productsUrl = 'http://localhost:8080/orders';

   httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'Basic ' + btoa('averell:hungry')
       })
     };

  constructor(private http: HttpClient) {
  }

  getCartProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): void {
     this.products.push(product);
  }

  orderProduct(product: Product): void {
     console.log(product.id);
//      this.http.post<any>(this.productsUrl, this.body, this.headers );
  }
}
