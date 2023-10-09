import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommLayoutComponent } from './ecomm-layout.component';

describe('EcommLayoutComponent', () => {
  let component: EcommLayoutComponent;
  let fixture: ComponentFixture<EcommLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommLayoutComponent]
    });
    fixture = TestBed.createComponent(EcommLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
