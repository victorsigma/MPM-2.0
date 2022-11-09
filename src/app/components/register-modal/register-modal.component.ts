import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Users } from '../../models/Users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  users: Users[] = [];
  newUser: Users = new Users();
  form: FormGroup = new FormGroup({
    user: new FormControl(),
    email: new FormControl(),
    confirm: new FormControl(),
    password: new FormControl()
  });
  constructor(private user:UsersService) { 
    this.form = new FormGroup({
      user: new FormControl(),
      email: new FormControl(),
      confirm: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl(),
      email: new FormControl(),
      confirm: new FormControl(),
      password: new FormControl()
    });
  }

  isRegisterData(): void {
    this.newUser = {
      UserId: 0,
      UserName: this.form.get('user')?.value,
      Email:  this.form.get('email')?.value,
      UserPass: this.form.get('password')?.value
    }

    //Validar que la contraseña sea correcta
    if(this.form.get('password')?.value == this.form.get('confirm')?.value) {
      //Validar que sea un usuario
      if(!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this.form.get('user')?.value))) {
        //Validar que sea un correo
        if(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this.form.get('email')?.value)) {
          this.users = this.user.usersList.filter((obj) => {
            return obj.Email == this.form.get('email')?.value
          })
          this.user.addUser(this.newUser).subscribe(data => {
            //this.user.getList();
            this.form.reset();

            let check:any = Object.values(data);
            if (check[0] != "Registered User") {
              if (check[0] != "Registered Email") {
                console.log('Successfully registered.', 'Operation Completed');
              } else {
                console.log('The user is already registered.', 'Operation Canceled');
              }
            } else {
              console.log('The mail has already been registered.', 'Operation Canceled');
            }
          });
        } else {
          console.log('This is not a valid email address..', 'Operation Canceled');
        } 
      } else {
        console.log('You cannot use an email address as a user.', 'Operation Canceled');
      }
    } else {
      console.log('Password not confirm')
    }

    this.form = new FormGroup({
      user: new FormControl(),
      email: new FormControl(),
      confirm: new FormControl(),
      password: new FormControl()
    });
  }
}
