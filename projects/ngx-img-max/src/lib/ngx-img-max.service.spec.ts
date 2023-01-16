import { TestBed } from '@angular/core/testing';

import { NgxImgMaxService } from './ngx-img-max.service';

describe('NgxImgMaxService', () => {
  let service: NgxImgMaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImgMaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
