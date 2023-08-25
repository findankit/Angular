import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoLayoutComponent } from './vimeo-layout.component';

describe('VimeoLayoutComponent', () => {
  let component: VimeoLayoutComponent;
  let fixture: ComponentFixture<VimeoLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VimeoLayoutComponent]
    });
    fixture = TestBed.createComponent(VimeoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
