import { Injectable } from '@angular/core';
import { LoginEmail, LoginUser, Users } from '../models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private myAppUrl = 'http://localhost:3000/'
  private myApiUrl = 'api/Users/'
  usersList: Users[] = [];
  constructor(private http:HttpClient) { }

  getListUsers(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }

  /*getList() {
    this.getListUsers().subscribe(data=> {
      this.usersList = data;
    })
  }*/

  addUser(user: Users) {
    return this.http.post(this.myAppUrl + this.myApiUrl, user)
  }

  updateUser(id: string, user: Users): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl+id, user)
  }

  loginUser(user: LoginUser) {
    return this.http.post(this.myAppUrl + this.myApiUrl + 'login-user', user);
  }

  loginEmail(user: LoginEmail) {
    return this.http.post(this.myAppUrl + this.myApiUrl + 'login-mail', user);
  }

  updateIcon(user: string, icon: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl+ 'Icon/' +user, icon)
  }


  getCard(): Observable<any> {
    return this.http.get("assets/data/cardinfo.json");
  }

  getBanListOcg(): Observable<any> {
    return this.http.get("assets/data/ocg-banlist.json");
  }

  getBanListTcg(): Observable<any> {
    return this.http.get("assets/data/tcg-banlist.json");
  }
}
