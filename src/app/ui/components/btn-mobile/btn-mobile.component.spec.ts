import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMobileComponent } from './btn-mobile.component';

describe('BtnMobileComponent', () => {
  let component: BtnMobileComponent;
  let fixture: ComponentFixture<BtnMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
