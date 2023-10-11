import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJsDebugComponent } from './node-js-debug.component';

describe('NodeJsDebugComponent', () => {
  let component: NodeJsDebugComponent;
  let fixture: ComponentFixture<NodeJsDebugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeJsDebugComponent]
    });
    fixture = TestBed.createComponent(NodeJsDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
