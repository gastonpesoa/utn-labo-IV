import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageServiceService } from './message-service.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private laComandaUrl = 'https://tpjr1.000webhostapp.com/public/';
  private laComandaUrlLocal = 'http://localhost:80/LaComanda/public/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageServiceService) { }

  getTest(): Observable<any>{
    return this.http.get<any>(this.laComandaUrlLocal)
    .pipe(res => res);
    // .pipe(res => res, catchError(this.handleError<any>('getTest')));
  }

  /** GET countries from the server */
  getUsers(metodo: string): Observable<any> {
    return this.http.get<any[]>(this.laComandaUrl + metodo).pipe(res => res);
  }

  /** POST: add a new hero to the server */
  login(username: string, password: string): Observable<any> {
    let body = {
      "username": username,
      "password": password
    }
    console.info("body: ", body, "header: ", this.httpOptions);
    return this.http.post<any>(this.laComandaUrlLocal + 'login', body, this.httpOptions)
      .pipe(res => res);
      // .pipe(res => res, catchError(this.handleError<any>('login')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.info("error: ", error); // log to console instead
    console.info("error msg: ", error.message); // log to console instead

    // // TODO: better job of transforming error for user consumption  
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  }
}


}
