import { Component, OnInit } from '@angular/core';
import { ClipService } from '../../services/clip.service';
import { Clip } from '@pushit/api-interface';

@Component({
  selector: 'pushit-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css'],
})
export class ClipsComponent implements OnInit {
  videos: Clip[] = [];
  selectedVid = this.videos[0];
  clipId: string = '';
  page = 1;
  limit = 10;
  option = {
    root: null,
    rootMargin: '100px',
    threshold: 0.4,
  };
  constructor(private clipService: ClipService) {}

  ngOnInit(): void {
    this.clipId = window.location.href.split('/')[4];
    const observable = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.clipService.getClipList().subscribe((data) => {
            this.videos = [...this.videos, ...data.clips];
            this.selectedVid = this.videos[0];
          });
          this.page++;
        }
      });
    }, this.option);

    observable.observe(document.querySelector('.loading') as Element);
  }

  handleClick(video: Clip): void {
    this.selectedVid = video;
  }
}
