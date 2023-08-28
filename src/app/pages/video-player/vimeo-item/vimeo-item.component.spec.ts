import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoItemComponent } from './vimeo-item.component';

describe('VimeoItemComponent', () => {
  let component: VimeoItemComponent;
  let fixture: ComponentFixture<VimeoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VimeoItemComponent]
    });
    fixture = TestBed.createComponent(VimeoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
