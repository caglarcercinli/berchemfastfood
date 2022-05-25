import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  selectedProduct?: Product;
  addedProduct?: Product;

  constructor(private productService: ProductService, private cartService: CartService) {}

   ngOnInit(): void {
      this.productService.getProducts().subscribe((products) =>
      (this.products = products)
      );
   }

   onSelect(product: Product): void {
      this.selectedProduct = product;
   }
   onAdd(product:Product): void {
      console.log(product.id);
      this.addedProduct = product;
      this.cartService.addProduct(this.addedProduct);
   }
}
