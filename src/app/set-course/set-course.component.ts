import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-set-course',
  templateUrl: './set-course.component.html',
  styleUrls: ['./set-course.component.css']
})
export class SetCourseComponent implements OnInit {

  lat = -40.748635;
  lng = 175.437114;
  zoom = 6;

  constructor() {
  }

  ngOnInit() {
  }

}
