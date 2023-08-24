import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoComponent } from './vimeo.component';

describe('VimeoComponent', () => {
  let component: VimeoComponent;
  let fixture: ComponentFixture<VimeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VimeoComponent]
    });
    fixture = TestBed.createComponent(VimeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
