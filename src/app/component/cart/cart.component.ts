import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   public products : any = [];
   public grandTotal !: number;
   constructor(private cartService : CartService, private httpClient: HttpClient) { }

   ngOnInit(): void {
      this.cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
    }
    removeItem(item: any){
      this.cartService.removeCartItem(item);
    }

    emptycart(){
      this.cartService.removeAllCart();
    }

    orderProduct(): void {
    const body = JSON.stringify({'user_id': 1});
    this.httpClient.post('http://localhost:8080/orders', body,
     {headers: new HttpHeaders({'Content-Type': 'application/json'})
       })
          .subscribe(data => {
            console.log(data);
       })
     this.cartService.removeAllCart();
    }


}
