import { Component, OnInit} from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor(private formService: FormService) {}

  invalidCustomer = this.formService.invalidCustomer;

  ngOnInit() {
    this.getCustomer();
  }

  get zipcode(): string {
    return this.formService.customer.zipcode;
  }

  set zipcode(value: string) {
    this.formService.customer.zipcode = value;
  }

  get housenumber(): string {
    return this.formService.customer.housenumber;
  }

  set housenumber(value: string) {
    this.formService.customer.housenumber = value;
  }

  get streetname(): string {
    return this.formService.customer.streetname;
  }

  set streetname(value: string) {
    this.formService.customer.streetname = value;
  }

  get city(): string {
    return this.formService.customer.city;
  }

  set city(value: string) {
    this.formService.customer.city = value;
  }

  get phonenumber(): string {
    return this.formService.customer.telephoneNumber;
  }

  set phonenumber(value: string) {
    this.formService.customer.telephoneNumber = value;
  }

  get email(): string {
    return this.formService.customer.email;
  }

  set email(value: string) {
    this.formService.customer.email = value;
  }

  // get invalidZipcode(): string {
  //   return this.formService.invalidCustomer.zipcode;
  // }
  // get invalidHousenumber(): string {
  //   return this.formService.invalidCustomer.housenumber;
  // }

  // get invalidStreetname(): string {
  //   return this.formService.invalidCustomer.streetname;
  // }

  // get invalidCity(): string {
  //   return this.formService.invalidCustomer.city;
  // }

  // get invalidPhonenumber(): string {
  //   return this.formService.invalidCustomer.telephoneNumber;
  // }

  // get invalidEmail(): string {
  //   return this.formService.invalidCustomer.email;
  // }

  getCustomer() {
    this.formService.customer;
    this.formService.invalidCustomer;
  }

}
