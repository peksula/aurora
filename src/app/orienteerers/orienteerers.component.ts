import { Component, OnInit } from '@angular/core';
import { Orienteerer } from '../orienteerer';
import { OrienteererService } from '../orienteerer.service';
import { Sex, Specialty, SkillLevel} from '../constants';

@Component({
  selector: 'app-orienteerers',
  templateUrl: './orienteerers.component.html',
  styleUrls: ['./orienteerers.component.css']
})
export class OrienteerersComponent implements OnInit {

  orienteerers: Orienteerer[];

  constructor(private orienteererService: OrienteererService) {
   }

  ngOnInit() {
    this.getOrienteerers();
  }

  getOrienteerers(): void {
    this.orienteererService.getOrienteerers()
      .subscribe(orienteerers => this.orienteerers = orienteerers);
  }
}
