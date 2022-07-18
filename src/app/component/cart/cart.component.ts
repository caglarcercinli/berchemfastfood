import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

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
    };

    orderProduct(data: any): void {
      data.user_id = '1';
      //to reach an order
      //console.log(this.cartService.cartItemList[0].id);
      this.httpClient.post('http://localhost:8080/orders', data,
       {headers: new HttpHeaders({'Content-Type': 'application/json'})
         })
            .subscribe(datax => {
              console.log(datax);
         })
       this.cartService.removeAllCart();
    }

}
