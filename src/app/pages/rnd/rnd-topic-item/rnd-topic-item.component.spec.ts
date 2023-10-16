import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RndTopicItemComponent } from './rnd-topic-item.component';

describe('RndTopicItemComponent', () => {
  let component: RndTopicItemComponent;
  let fixture: ComponentFixture<RndTopicItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RndTopicItemComponent]
    });
    fixture = TestBed.createComponent(RndTopicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
