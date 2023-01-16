import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImgMaxComponent } from './ngx-img-max.component';

describe('NgxImgMaxComponent', () => {
  let component: NgxImgMaxComponent;
  let fixture: ComponentFixture<NgxImgMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImgMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImgMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
