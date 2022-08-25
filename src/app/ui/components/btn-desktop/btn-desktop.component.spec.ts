import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDesktopComponent } from './btn-desktop.component';

describe('BtnDesktopComponent', () => {
  let component: BtnDesktopComponent;
  let fixture: ComponentFixture<BtnDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
