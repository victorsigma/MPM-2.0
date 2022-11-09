import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/Users';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  icons: any = [ 'user_icon_1', 'user_icon_2', 'user_icon_3', 'user_icon_4' ];
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    if(this.login.isLoggin() == true) {
      this.user = this.login.getUser();
    }
    if(this.user.UserName == 'victorsigma') {
      this.icons.push('user_icon_vsigm');
    }
  }

  loginDate(): void {
  }
}
