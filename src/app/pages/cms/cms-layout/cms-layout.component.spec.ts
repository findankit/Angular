import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsLayoutComponent } from './cms-layout.component';

describe('CmsLayoutComponent', () => {
  let component: CmsLayoutComponent;
  let fixture: ComponentFixture<CmsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmsLayoutComponent]
    });
    fixture = TestBed.createComponent(CmsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
