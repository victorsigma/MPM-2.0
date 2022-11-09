import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Users';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User = new User();
  isLogin: boolean;
  cartLenght: number = 0;
  constructor(public login:LoginService, private userData:UsersService, private router:Router, private cartData: CartService) { 
    this.isLogin = login.isLoggin();
    this.user = this.login.getUser();

    if(this.isLogin) {
      this.cartData.getLenghtCart(this.login.getUser().UserName).subscribe(data => {
        this.cartLenght = data.Lenght;
      }) 
    }
  }

  ngOnInit(): void {
    //this.userData.getList();
    this.isLogin = this.login.isLoggin();
    this.user = this.login.getUser();
    if(this.isLogin) {
      this.cartData.getLenghtCart(this.login.getUser().UserName).subscribe(data => {
        this.cartLenght = data.Lenght;
      }) 
    }
  }

  logout(): void {
    this.login.setStatus(false);
    this.login.setUser(null);
    this.updateLogin();
    this.login.loggout();
  }

  updateLogin(): void {
    this.isLogin = this.login.isLoggin();
    this.user = this.login.getUser();
    this.router.navigate(['/reload']);
  }

  loginDate(): void {
    this.updateLogin();
    this.user = this.login.getUser();
  }
}
