import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin: boolean;
  user: User = new User();
  constructor(public login: LoginService) { 
    this.isLogin = this.login.isLoggin();
  }

  ngOnInit(): void {
    this.isLogin = this.login.isLoggin();
    this.user = this.login.getUser();
  }
}
