import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosLayoutComponent } from './pos-layout.component';

describe('PosLayoutComponent', () => {
  let component: PosLayoutComponent;
  let fixture: ComponentFixture<PosLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosLayoutComponent]
    });
    fixture = TestBed.createComponent(PosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
