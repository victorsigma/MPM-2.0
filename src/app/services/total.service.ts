import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private total: number = 0;
  constructor(private cart: CartService) { }

  public pushTotal(user: string) {
    this.cart.getTotalCart(user).subscribe(data => {
      this.total = data.Total;
    })
  }

  public getTotal() {
    return this.total;
  }
}
