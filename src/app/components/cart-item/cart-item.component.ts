import { Component, Input, OnInit } from '@angular/core';
import { Structure } from 'src/app/models/Structures';
import { CartBase } from 'src/app/models/Users';
import { StructuresService } from '../../services/structures.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {


  @Input() cart: CartBase = new CartBase();
  structure: Structure = new Structure();
  constructor(private structures:StructuresService, private cartData: CartService, private router: Router) { 
  }

  ngOnInit(): void {
    this.structures.getStructure(this.cart.StructureId).subscribe(data => {
      this.structure = data;
    })
  }


  deleteCart() {
    this.cartData.deleteCart(this.cart.CartId).subscribe(data=>{
      this.router.navigate(['/cart-reload'])
    });
  }

  addProduct() {
    const cartUpdate: CartBase = new CartBase();

    cartUpdate.CountProduct = (this.cart.CountProduct + 1)
    this.cartData.updateCart(this.cart.CartId, cartUpdate).subscribe(data => {
      this.router.navigate(['/cart-reload'])
    })
  }

  removeProduct() {
    const cartUpdate: CartBase = new CartBase();


    cartUpdate.CountProduct = (this.cart.CountProduct - 1)
    if(cartUpdate.CountProduct == 0) {
      this.deleteCart();
    } else {
      this.cartData.updateCart(this.cart.CartId, cartUpdate).subscribe(data => {
        this.router.navigate(['/cart-reload'])
      })
    }
  }
}
