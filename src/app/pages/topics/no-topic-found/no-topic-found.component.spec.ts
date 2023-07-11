import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTopicFoundComponent } from './no-topic-found.component';

describe('NoTopicFoundComponent', () => {
  let component: NoTopicFoundComponent;
  let fixture: ComponentFixture<NoTopicFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoTopicFoundComponent]
    });
    fixture = TestBed.createComponent(NoTopicFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
