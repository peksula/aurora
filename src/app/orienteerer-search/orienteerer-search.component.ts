import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Orienteerer } from '../orienteerer';
import { OrienteererService } from '../orienteerer.service';

@Component({
  selector: 'app-orienteerer-search',
  templateUrl: './orienteerer-search.component.html',
  styleUrls: [ './orienteerer-search.component.css' ]
})
export class OrienteererSearchComponent implements OnInit {
  orienteerers$: Observable<Orienteerer[]>;
  private searchTerms = new Subject<string>();

  constructor(private orienteererService: OrienteererService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.orienteerers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.orienteererService.searchOrienteerers(term)),
    );
  }
}