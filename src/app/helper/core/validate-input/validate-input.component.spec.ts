import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateInputComponent } from './validate-input.component';

describe('ValidateInputComponent', () => {
  let component: ValidateInputComponent;
  let fixture: ComponentFixture<ValidateInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateInputComponent]
    });
    fixture = TestBed.createComponent(ValidateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
