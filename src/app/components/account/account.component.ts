import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Users';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User = new User();
  constructor(private login:LoginService, private router:Router) { 
    if(this.login.isLoggin() == false)
      this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }
}
