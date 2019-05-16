import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import { FormService } from '../form.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private formService: FormService, private location: Location) {}

  invalidCustomer = this.formService.invalidCustomer;

  ngOnInit() {
    this.getCustomer();
  }

  get initials(): string {
    return this.formService.customer.initials;
  }

  set initials(value: string) {
    this.formService.customer.initials = value;
  }

  get surname(): string {
    return this.formService.customer.surname;
  }

  set surname(value: string) {
    this.formService.customer.surname = value;
  }

  get dateOfBirth(): string {
    return this.formService.customer.dateOfBirth;
  }

  set dateOfBirth(value: string) {
    this.formService.customer.dateOfBirth = value;
  }

  get nationality(): string {
    return this.formService.customer.nationality;
  }

  set nationality(value: string) {
    this.formService.customer.nationality = value;
  }

  get bsn(): string {
    return this.formService.customer.bsn;
  }

  set bsn(value: string) {
    this.formService.customer.bsn = value;
  }

  getCustomer() {
    this.formService.customer;
    this.formService.invalidCustomer;
  }

}
