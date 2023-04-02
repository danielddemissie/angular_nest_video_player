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
    this.clipService.getApiResponse().subscribe((date) => {
      console.log(date);
      this.message = date.message;
    });
  }
}
