import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AES, enc } from 'crypto-js';
import { LoginService } from 'src/app/services/login.service';
import { LoginEmail, LoginUser } from '../../models/Users';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  isLogin: boolean = false;
  userData: any;
  form: FormGroup = new FormGroup({
    user: new FormControl(),
    password: new FormControl()
  });

  @Output() loginDate: EventEmitter<null> = new EventEmitter();
  constructor(private login: LoginService, private user: UsersService, private router: Router) { }

  ngOnInit(): void {
    //this.getUsers();
  }
  isLoginDataTrue(): void {
    //Validar si es un correo o usuario
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this.form.get('user')?.value)) {

      this.userData = new LoginEmail(this.form.get('password')?.value, this.form.get('user')?.value);

      this.user.loginEmail(this.userData).subscribe(data => {
        let check: any = Object.values(data);
        if (check[0] != 'The user does not exist') {
          if (check[0] != 'Incorrect password') {
            this.login.setUser(data);
            this.loggingUser();
          } else {
            console.warn('Incorrect data connection error.', 'Operation Canceled');
          }
        } else {
          console.warn('Incorrect data connection error.', 'Operation Canceled');
        }
      })
    } else {
      this.userData = new LoginUser(this.form.get('password')?.value, this.form.get('user')?.value);
      this.user.loginUser(this.userData).subscribe(data => {
        let check: any = Object.values(data);
        if (check[0] != 'The user does not exist') {
          if (check[0] != 'Incorrect password') {
            this.login.setUser(data);
            this.loggingUser();
          } else {
            console.warn('Incorrect data connection error.', 'Operation Canceled');
          }
        } else {
          console.warn('Incorrect data connection error.', 'Operation Canceled');
        }
      })
    }
    this.reloadForm();
  }
  isLoginDataFalse(): void {
    this.login.setStatus(false);
    this.loginDate.emit()
  }


  loggingUser() {
    this.login.setStatus(true);
    console.log('Successfully logged.', 'Operation Completed');
    this.login.setUserData();
    this.loginDate.emit();
    this.router.navigate(['/reload']);
  }

  reloadForm() {
    this.form = new FormGroup({
      user: new FormControl(),
      password: new FormControl()
    });
  }

  /*getUsers() {
    this.user.getList();
  }*/
}
