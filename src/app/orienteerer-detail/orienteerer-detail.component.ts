import { Component, OnInit, Input } from '@angular/core';
import { Orienteerer } from '../orienteerer';

@Component({
  selector: 'app-orienteerer-detail',
  templateUrl: './orienteerer-detail.component.html',
  styleUrls: ['./orienteerer-detail.component.css']
})
export class OrienteererDetailComponent implements OnInit {

  @Input() orienteerer: Orienteerer;

  constructor() { }

  ngOnInit() {
  }

}
