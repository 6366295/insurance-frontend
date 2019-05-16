import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PersonalInfoComponent} from './personal-info/personal-info.component'
import {ContactInfoComponent} from './contact-info/contact-info.component'
import {PaymentInfoComponent} from './payment-info/payment-info.component'
import {AppliedComponent} from './applied/applied.component'

const routes: Routes = [
  { path: 'personal',component: PersonalInfoComponent },
  { path: 'contact',component: ContactInfoComponent },
  { path: 'payment',component: PaymentInfoComponent },
  { path: 'applied',component: AppliedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
