import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import jwt from 'jwt-decode';
import { CartService } from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private status: boolean = false;
  private user: any;
  private userData: any;
  private cart: any = [];

  
  constructor(private cookies: CookieService, private cartData: CartService) { 
    if(this.getToken().length != 0) {
      this.user = {
        token: this.getToken()
      }
      this.setStatus(true);
      this.setUserData();
    } else {
      console.log("No user")
    }
  }

  public isLoggin(): boolean {
      return this.status;
  }

  public setUser(user: any) {
    this.user = user;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public setUserData() {
    let data: any = Object.values(this.user)
    this.setToken(data[0]);
    this.userData = this.getUserData(data[0]);
  }

  private getUserData(token: string): any {
    try {
      return jwt(token);
    } catch(Error) {
      return null;
    }
  }

  public getUser(): any {
    return  this.userData;
  }

  private setToken(token: string) {
    this.cookies.set("token", token);
  }
  private getToken() {
    return this.cookies.get("token");
  }

  public loggout() {
    this.cookies.delete("token");
  }
}
