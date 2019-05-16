import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Generic Insurance Application';
  showButton: boolean = true;

  constructor(private formService: FormService, private router: Router) { }

  submit(): void {
    this.formService.addCustomer().pipe(tap(data => {
      if (data.status = '201') {
        this.router.navigate(['applied']);
        this.showButton = false;
      }
    })).subscribe();
  }
}
