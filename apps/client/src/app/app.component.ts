import { Component, OnInit } from '@angular/core';
import { ClipService } from './services/clip.service';

@Component({
  selector: 'pushit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  message = '';
  constructor(private clipService: ClipService) {}

  ngOnInit(): void {
    this.clipService.getApiResponse().subscribe((data) => {
      console.log(data);
      this.message = data.message;
    });

    this.clipService.getClipList().subscribe((data) => {
      console.log(data);
    });
  }
}
