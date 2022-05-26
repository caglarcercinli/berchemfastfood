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
   selectedProduct?: Product;
   orderedProduct?: Product;


  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
      this.selectedProduct = product;
  }

  getProducts(): void {
    this.cartService.getCartProducts()
          .subscribe(products => this.products = products.slice(0, 5));
  }

   onOrder(): void {
    this.cartService.orderProduct(this.products[0]);
    console.log('from onOrder cart.component.ts '+this.products[0].id);
   }
}
