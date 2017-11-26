import { Component, OnInit } from '@angular/core';
import { ORIENTEERERS } from '../mock-orienteerers';

@Component({
  selector: 'app-orienteerers',
  templateUrl: './orienteerers.component.html',
  styleUrls: ['./orienteerers.component.css']
})
export class OrienteerersComponent implements OnInit {

  orienteerers = ORIENTEERERS;

  constructor() { }

  ngOnInit() {
  }

}
