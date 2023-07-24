import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFieldsComponent } from './add-new-fields.component';

describe('AddNewFieldsComponent', () => {
  let component: AddNewFieldsComponent;
  let fixture: ComponentFixture<AddNewFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewFieldsComponent]
    });
    fixture = TestBed.createComponent(AddNewFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
