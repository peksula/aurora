import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks: Track[];

  constructor(private trackService: TrackService) {
  }

  ngOnInit() {
    this.getTracks();
  }

  getTracks(): void {
    this.trackService.getTracks()
      .subscribe(tracks => this.tracks = tracks);
  }
}
