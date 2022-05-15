import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  selectedProduct?: Product;

  constructor(private productService: ProductService) {}

   ngOnInit(): void {
     this.getProducts();
   }

   onSelect(product: Product): void {
      this.selectedProduct = product;
   }

  getProducts(): void {
      this.productService.getProducts()
          .subscribe(products => this.products = products);
    }
}
