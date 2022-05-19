import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'http://localhost:8080/products';
  constructor(private http: HttpClient ) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
