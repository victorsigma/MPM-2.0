import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';
import { TotalService } from '../../services/total.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  list: any = [];
  constructor(private cartData:CartService, private login:LoginService, private total: TotalService) { 
    this.cartData.getCart(this.login.getUser().UserName).subscribe(data => {
      this.list = data;
      this.total.pushTotal(this.login.getUser().UserName);
    })
  }

  ngOnInit(): void {
    this.cartData.getCart(this.login.getUser().UserName).subscribe(data => {
      this.list = data;
      this.total.pushTotal(this.login.getUser().UserName);
    })
  }

}
