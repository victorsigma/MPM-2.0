import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-reload',
  templateUrl: './cart-reload.component.html',
  styleUrls: ['./cart-reload.component.css']
})
export class CartReloadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/cart'])
  }

}
