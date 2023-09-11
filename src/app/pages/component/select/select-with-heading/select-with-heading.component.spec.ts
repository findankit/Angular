import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWithHeadingComponent } from './select-with-heading.component';

describe('SelectWithHeadingComponent', () => {
  let component: SelectWithHeadingComponent;
  let fixture: ComponentFixture<SelectWithHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectWithHeadingComponent]
    });
    fixture = TestBed.createComponent(SelectWithHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
