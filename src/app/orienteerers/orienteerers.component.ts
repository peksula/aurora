import { Component, OnInit } from '@angular/core';
import { ORIENTEERERS } from '../mock-orienteerers';
import { Orienteerer } from '../orienteerer';

@Component({
  selector: 'app-orienteerers',
  templateUrl: './orienteerers.component.html',
  styleUrls: ['./orienteerers.component.css']
})
export class OrienteerersComponent implements OnInit {

  orienteerers = ORIENTEERERS;
  selectedOrienteerer: Orienteerer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(orienteerer: Orienteerer): void {
    this.selectedOrienteerer = orienteerer;
  }

}
