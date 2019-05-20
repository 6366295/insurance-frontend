import { Component, OnInit} from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  constructor(private formService: FormService) {}

  invalidCustomer = this.formService.invalidCustomer;

  ngOnInit() {
    this.getCustomer();
  }

  get iban(): string {
    return this.formService.customer.iban;
  }

  set iban(value: string) {
    this.formService.customer.iban = value;
  }

  getCustomer() {
    this.formService.customer;
    this.formService.invalidCustomer;
  }
  
}
