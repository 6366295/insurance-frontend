import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FormService } from './form.service';

describe('FormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    declarations: []
  }));


  it('should be created', () => {
    const service: FormService = TestBed.get(FormService);
    expect(service).toBeTruthy();
  });
});
