import { Component, OnInit } from '@angular/core';
import { ClipService } from '../../services/clip.service';
import { Clip } from '@pushit/api-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pushit-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css'],
})
export class ClipsComponent implements OnInit {
  videos: Clip[] = [];
  selectedVid = this.videos[0];
  page = 1;
  limit = 10;
  private observerOption = {
    root: null,
    rootMargin: '100px',
    threshold: 0.4,
  } as IntersectionObserverInit;
  constructor(
    private clipService: ClipService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const observable = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.clipService
            .getClipList(this.page, this.limit)
            .subscribe((data) => {
              this.videos = [...this.videos, ...data.clips];
              this.selectedVid = this.videos[0];
            });
          this.page++;
        }
      });
    }, this.observerOption);

    observable.observe(document.querySelector('.loadmore') as Element);
  }

  handleClick(video: Clip): void {
    this.selectedVid = video;
  }
}
