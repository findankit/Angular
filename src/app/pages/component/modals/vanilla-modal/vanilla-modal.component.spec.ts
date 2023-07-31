import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaModalComponent } from './vanilla-modal.component';

describe('VanillaModalComponent', () => {
  let component: VanillaModalComponent;
  let fixture: ComponentFixture<VanillaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VanillaModalComponent]
    });
    fixture = TestBed.createComponent(VanillaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
