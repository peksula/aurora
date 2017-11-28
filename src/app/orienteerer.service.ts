import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Orienteerer } from './orienteerer';
import { ORIENTEERERS } from './mock-orienteerers';
import { MessageService } from './message.service';

@Injectable()
export class OrienteererService {

  constructor(private messageService: MessageService) { }

  getOrienteerers(): Observable<Orienteerer[]> {
    this.messageService.add('OrienteererService: fetched orienteerers');
    return of(ORIENTEERERS);
  }

}
