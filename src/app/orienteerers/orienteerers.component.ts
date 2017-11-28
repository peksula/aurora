import { Component, OnInit } from '@angular/core';
import { Orienteerer } from '../orienteerer';
import { OrienteererService } from '../orienteerer.service';

@Component({
  selector: 'app-orienteerers',
  templateUrl: './orienteerers.component.html',
  styleUrls: ['./orienteerers.component.css']
})
export class OrienteerersComponent implements OnInit {

  orienteerers: Orienteerer[];
  selectedOrienteerer: Orienteerer;

  constructor(private orienteererService: OrienteererService) { }

  ngOnInit() {
    this.getOrienteerers();
  }

  onSelect(orienteerer: Orienteerer): void {
    this.selectedOrienteerer = orienteerer;
  }

  getOrienteerers(): void {
    this.orienteererService.getOrienteerers()
      .subscribe(orienteerers => this.orienteerers = orienteerers);
  }

}
