import { Component, OnInit } from '@angular/core';
import { Control } from '../control';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { LatLng } from '@agm/core/services/google-maps-types';

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

  constructor() {
    this.controls = [];
  }

  ngOnInit() {
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

