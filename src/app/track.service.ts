import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Track } from './track';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrackService {

  private tracksUrl = 'api/tracks';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.tracksUrl)
      .pipe(
        tap(tracks => this.log('fetched tracks')),
        catchError(this.handleError('getOrienteerers', []))
      );
  }

  getTrack(id: number): Observable<Track> {
    const url = `${this.tracksUrl}/${id}`;
    return this.http.get<Track>(url).pipe(
      tap(_ => this.log(`fetched track id=${id}`)),
      catchError(this.handleError<Track>(`getTrack id=${id}`))
    );
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
