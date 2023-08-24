import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoVideoPlayerComponent } from './vimeo-video-player.component';

describe('VimeoVideoPlayerComponent', () => {
  let component: VimeoVideoPlayerComponent;
  let fixture: ComponentFixture<VimeoVideoPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VimeoVideoPlayerComponent]
    });
    fixture = TestBed.createComponent(VimeoVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
