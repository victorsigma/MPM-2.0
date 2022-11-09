import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-item',
  templateUrl: './icon-item.component.html',
  styleUrls: ['./icon-item.component.css']
})
export class IconItemComponent implements OnInit {

  @Input() icon: string = '';
  @Output() loginDate: EventEmitter<null> = new EventEmitter();
  constructor(private _user: UsersService, private login:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  changeIcon() {
    let ico: any = {"UserIcon": this.icon}
    let user: User = this.login.getUser();

    this._user.updateIcon(user.UserName, ico).subscribe(data => {
      this.login.setUser(data);
      this.loggingUser();
    })
  }

  loggingUser() {
    this.login.setStatus(true);
    console.log('Successfully logged.', 'Operation Completed');
    this.login.setUserData();
    this.router.navigate(['/reload']);
  }
}
