import { TestBed } from '@angular/core/testing';
import { PhoneUtilsService } from './phone-utils.service';

describe('AngularPhoneUtilsLibService', () => {
  let service: PhoneUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
