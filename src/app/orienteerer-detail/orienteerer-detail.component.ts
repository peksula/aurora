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
  specialty: string;

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
      .subscribe(orienteerer => this.setOrienteerer(orienteerer));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.orienteererService.updateOrienteerer(this.orienteerer)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    this.orienteererService.deleteOrienteerer(this.orienteerer)
      .subscribe(() => this.goBack());
  }

  setOrienteerer(orienteerer) {
    this.orienteerer = orienteerer;
    this.specialty = this.orienteererService.getSpecialty(orienteerer);
  }
}
