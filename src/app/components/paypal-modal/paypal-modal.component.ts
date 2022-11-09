import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TotalService } from '../../services/total.service';

declare var paypal: any;

@Component({
  selector: 'app-paypal-modal',
  templateUrl: './paypal-modal.component.html',
  styleUrls: ['./paypal-modal.component.css']
})
export class PaypalModalComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef = new ElementRef(0);
  constructor(private total: TotalService) {
  }

  ngOnInit(): void {
    paypal.Buttons({
      style: {
        label: 'pay'
      },

      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {

              amount: {
                currency_code: 'MXN',
                value: this.total.getTotal()
              }
            }
          ]
        })
      },

      onApprove: async (data: any, actions: any) => {
        const order = await actions.order.capture();
        console.log(order);
      },

      onError: (err: any) => {
        console.log(err)
      } 
    }).render(this.paypalElement.nativeElement);
  }
}
