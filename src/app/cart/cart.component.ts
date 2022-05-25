import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   products: Product[] = [];


  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.cartService.getCartProducts()
          .subscribe(products => this.products = products.slice(0, 5));
  }

}
