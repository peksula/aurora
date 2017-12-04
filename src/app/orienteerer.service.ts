import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Orienteerer } from './orienteerer';
import { MessageService } from './message.service';
import { Specialty } from './constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrienteererService {

  private orienteerersUrl = 'api/orienteerers';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getOrienteerers(): Observable<Orienteerer[]> {
    return this.http.get<Orienteerer[]>(this.orienteerersUrl)
      .pipe(
        tap(orienteerers => this.log('fetched orienteerers')),
        catchError(this.handleError('getOrienteerers', []))
      );
  }

  getOrienteerer(id: number): Observable<Orienteerer> {
    const url = `${this.orienteerersUrl}/${id}`;
    return this.http.get<Orienteerer>(url).pipe(
      tap(_ => this.log(`fetched orienteerer id=${id}`)),
      catchError(this.handleError<Orienteerer>(`getOrienteerer id=${id}`))
    );
  }

  updateOrienteerer (orienteerer: Orienteerer): Observable<any> {
    return this.http.put(this.orienteerersUrl, orienteerer, httpOptions).pipe(
      tap(_ => this.log(`updated orienteerer id=${orienteerer.id}`)),
      catchError(this.handleError<any>('updateOrienteerer'))
    );
  }

  addOrienteerer (orienteerer: Orienteerer): Observable<Orienteerer> {
    return this.http.post<Orienteerer>(this.orienteerersUrl, orienteerer, httpOptions).pipe(
      tap((orienteerer: Orienteerer) => this.log(`added orienteerer with id=${orienteerer.id}`)),
      catchError(this.handleError<Orienteerer>('addOrienteerer'))
    );
  }

  deleteOrienteerer (orienteerer: Orienteerer | number): Observable<Orienteerer> {
    const id = typeof orienteerer === 'number' ? orienteerer : orienteerer.id;
    const url = `${this.orienteerersUrl}/${id}`;

    return this.http.delete<Orienteerer>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted orienteerer id=${id}`)),
      catchError(this.handleError<Orienteerer>('deleteOrienteerer'))
    );
  }

  searchOrienteerers(term: string): Observable<Orienteerer[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Orienteerer[]>(`${this.orienteerersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found orienteerers matching "${term}"`)),
      catchError(this.handleError<Orienteerer[]>('searchOrienteerers', []))
    );
  }

  getSpecialty(orienteerer: Orienteerer) {
    switch (orienteerer.specialty) {
        case Specialty.None: return 'None';
        case Specialty.Quick: return 'Quick';
        case Specialty.Strong: return 'Strong';
        case Specialty.Unpredictable: return 'Unpredictable';
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      if (error) {
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
      } else {
        this.log(`${operation} failed`);
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('OrienteererService: ' + message);
  }

}
