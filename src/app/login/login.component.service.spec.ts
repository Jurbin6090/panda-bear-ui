/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginComponentService } from './login.component.service';

describe('Service: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginComponentService]
    });
  });

  it('should ...', inject([LoginComponentService], (service: LoginComponentService) => {
    expect(service).toBeTruthy();
  }));
});
