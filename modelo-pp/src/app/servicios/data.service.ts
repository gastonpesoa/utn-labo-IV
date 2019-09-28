import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private laComandaUrlLocal = 'http://localhost:80/LaComanda/public/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTest(method: string): Observable<any> {
    return this.http.get<any>(this.laComandaUrlLocal + method)
      .pipe(res => res);
    // .pipe(res => res, catchError(this.handleError<any>('getTest')));
  }

  getAll(method: string): Observable<any> {
    return this.http.get<any>(this.laComandaUrlLocal + method)
      .pipe(res => res);
  }

  delete(path: string) {
    // console.info("path",path);
    return this.http.post<any>(this.laComandaUrlLocal + path, null, this.httpOptions)
      .pipe(res => res);
  }

}
