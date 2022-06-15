import { Injectable } from '@angular/core';
import { Product } from './product';
import { Order } from './order';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];
  private productsUrl = 'http://localhost:8080/orders';

  constructor(private httpClient: HttpClient) {
  }

  getCartProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  orderProduct(product: Product ): void {
    console.log('post order ' + product.id);
    const body=
    JSON.stringify( 
      {
      'user_id': 2
    });
    this.httpClient.post('http://localhost:8080/orders',
    body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .subscribe(data => {
        console.log(data);
      })     
  }
}
