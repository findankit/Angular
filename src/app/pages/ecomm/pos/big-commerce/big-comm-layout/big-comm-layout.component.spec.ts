import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCommLayoutComponent } from './big-comm-layout.component';

describe('BigCommLayoutComponent', () => {
  let component: BigCommLayoutComponent;
  let fixture: ComponentFixture<BigCommLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigCommLayoutComponent]
    });
    fixture = TestBed.createComponent(BigCommLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
