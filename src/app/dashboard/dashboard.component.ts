import { Component, OnInit } from '@angular/core';
import { Orienteerer } from '../orienteerer';
import { OrienteererService } from '../orienteerer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  orienteerers: Orienteerer[] = [];

  constructor(private orienteererService: OrienteererService) { }

  ngOnInit() {
    this.getOrienteerers();
  }

  getOrienteerers(): void {
    this.orienteererService.getOrienteerers()
      .subscribe(orienteerers => this.orienteerers = orienteerers.slice(1, 5));
  }
}