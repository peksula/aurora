import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Orienteerer } from '../orienteerer';
import { OrienteererService } from '../orienteerer.service';

@Component({
  selector: 'app-orienteerer-detail',
  templateUrl: './orienteerer-detail.component.html',
  styleUrls: ['./orienteerer-detail.component.css']
})
export class OrienteererDetailComponent implements OnInit {

  @Input() orienteerer: Orienteerer;

  constructor(
    private route: ActivatedRoute,
    private orienteererService: OrienteererService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getOrienteerer();
  }

  getOrienteerer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orienteererService.getOrienteerer(id)
      .subscribe(orienteerer => this.orienteerer = orienteerer);
  }

  goBack(): void {
    this.location.back();
  }
}
