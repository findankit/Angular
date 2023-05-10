import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughPageComponent } from './rough-page.component';

describe('RoughPageComponent', () => {
  let component: RoughPageComponent;
  let fixture: ComponentFixture<RoughPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoughPageComponent]
    });
    fixture = TestBed.createComponent(RoughPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
