import { Component, OnInit } from '@angular/core';
import { Structure } from '../../models/Structures';
import { StructureModalService } from '../../services/structure-modal.service';
import { CartService } from '../../services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Cart } from '../../models/Users';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structure-modal',
  templateUrl: './structure-modal.component.html',
  styleUrls: ['./structure-modal.component.css']
})
export class StructureModalComponent implements OnInit {

  public structure: Structure = new Structure();
  constructor(public structures:StructureModalService, private cartUser: CartService, private login: LoginService, private router: Router) { 
    this.structure = structures.getStructureMoData();
  }

  form: FormGroup = new FormGroup({
    count: new FormControl(1)
  });
  ngOnInit(): void {
    this.structure = this.structures.getStructureMoData()
  }

  addCart() {
    const cart = new Cart();

    cart.CountProduct = this.form.get('count')?.value;
    cart.StructureId = this.structures.getStructureMoData().StructureId;
    cart.UserName = this.login.getUser().UserName;
    this.cartUser.addCart(cart).subscribe(data => {
    })

    this.router.navigate(['/']);
  }
}
