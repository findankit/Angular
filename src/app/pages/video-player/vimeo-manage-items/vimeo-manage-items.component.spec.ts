import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoManageItemsComponent } from './vimeo-manage-items.component';

describe('VimeoManageItemsComponent', () => {
  let component: VimeoManageItemsComponent;
  let fixture: ComponentFixture<VimeoManageItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VimeoManageItemsComponent]
    });
    fixture = TestBed.createComponent(VimeoManageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
