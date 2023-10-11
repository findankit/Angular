import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RndTopicsComponent } from './rnd-topics.component';

describe('RndTopicsComponent', () => {
  let component: RndTopicsComponent;
  let fixture: ComponentFixture<RndTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RndTopicsComponent]
    });
    fixture = TestBed.createComponent(RndTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
