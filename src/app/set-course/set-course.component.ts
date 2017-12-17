import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouseEvent as AGMMouseEvent } from '@agm/core';

import { LatLng } from '@agm/core/services/google-maps-types';
import {} from '@types/googlemaps';

import { Control } from '../control';
import { Track } from '../track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-set-course',
  templateUrl: './set-course.component.html',
  styleUrls: ['./set-course.component.css']
})
export class SetCourseComponent implements OnInit {

  lat = 60.631216286255004;
  lng = 24.764760732650757;
  zoom = 17;
  totalLength = 0;

  controls: Control[];

  @Input() track: Track;

  constructor(
    private route: ActivatedRoute,
    private trackService: TrackService) {
    this.controls = [];
  }

  ngOnInit() {
    this.getTrack();
  }

  getTrack(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) { // id is 0 when there is no existing track to load, but new one to create
      this.trackService.getTrack(id)
        .subscribe(track => this.setTrack(track));
    }
  }

  setTrack(track) {
    this.track = track;
  }

  mapClicked($event: AGMMouseEvent) {
    this.controls.push({
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
      height: 0
    });
    this.calculateLength();
  }

  removeControl(control: Control): void {
    this.controls = this.controls.filter(c => c !== control);
    this.calculateLength();
  }

  calculateLength(): void {
    this.totalLength = 0;
    let previous: google.maps.LatLng;
    for (const control of this.controls) {
      const current: google.maps.LatLng = new google.maps.LatLng(control.latitude, control.longitude);
      if (previous) {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(current, previous);
        this.totalLength += distance;
      }
      previous = current;
    }
  }
}

