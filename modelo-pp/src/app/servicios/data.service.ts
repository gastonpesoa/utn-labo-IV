import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../clases/producto';

const URL = 'http://localhost:80/LaComanda/public/';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTest(method: string): Observable<any> {
    return this.http.get<any>(URL + method)
      .pipe(res => res);
    // .pipe(res => res, catchError(this.handleError<any>('getTest')));
  }

  getAll(method: string): Observable<any> {
    return this.http.get<any>(URL + method)
      .pipe(res => res);
  }

  delete(path: string): Observable<any> {
    // console.info("path",path);
    return this.http.post<any>(URL + path, null, this.httpOptions)
      .pipe(res => res);
  }

  buscar(path: string): Observable<any> {
    return this.http.get<any>(URL + path)
      .pipe(res => res);
  }

  alta(path: string, data: any): Observable<any> {
    return this.http.post<any>(URL + path, data, this.httpOptions)
      .pipe(res => res);
  }


}
