import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartBase } from '../models/Users';
import { StructuresService } from './structures.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private myAppUrl = 'http://localhost:3000/'
  private myApiUrl = 'api/Cart/'
  private total: number = 0;
  constructor(private http:HttpClient, private structures: StructuresService) { }

  public addCart(cart: Cart) {
    return this.http.post(this.myAppUrl + this.myApiUrl, cart)
  }

  public getCart(user: string): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + user);
  }

  public deleteCart(cart: number) {
    return this.http.delete(this.myAppUrl + this.myApiUrl + cart)
  }

  public updateCart(cart: number, count: any) {
    return this.http.put(this.myAppUrl + this.myApiUrl + cart, count);
  }

  public getTotalCart(user: string): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl+'Total/' + user);
  }

  public getLenghtCart(user: string): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl+'Lenght/' + user);
  }
}
