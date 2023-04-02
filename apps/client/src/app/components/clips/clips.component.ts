import { Component, OnInit } from '@angular/core';
import { ClipService } from '../../services/clip.service';

@Component({
  selector: 'pushit-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css'],
})
export class ClipsComponent implements OnInit {
  videos: any = [];
  selectedVid = this.videos[0];
  constructor(private clipService: ClipService) {}

  ngOnInit(): void {
    this.clipService.getClipList().subscribe((data) => {
      this.videos = data.clips;
      this.selectedVid = this.videos[0];
    });
  }

  handleClick(video: any): void {
    this.selectedVid = video;
  }
}
