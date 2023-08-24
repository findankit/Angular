import { Component, AfterViewInit, Input, ViewChild, ElementRef, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import VimeoPlayer from '@vimeo/player';

@Component({
  selector: 'app-vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.scss']
})
export class VimeoComponent implements AfterViewInit {
	@Input() videoId!: number | undefined;
  playerId = `vimeo-player-${Math.floor(Math.random() * 1000)}`;
	@ViewChild('playerArea') playerArea!: ElementRef<HTMLIFrameElement>;
	player: VimeoPlayer | null = null;

	ngAfterViewInit(): void {
		const options = {
      id: this.videoId,
      loop: false,
    };
    this.player = new VimeoPlayer(this.playerArea.nativeElement, options);
	}

	pause() {
		this.player?.pause();
	}

	play() {
		this.player?.play();
	}
	

}
