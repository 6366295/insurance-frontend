import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { AppliedComponent } from './applied/applied.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ContactInfoComponent,
    PaymentInfoComponent,
    AppliedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
