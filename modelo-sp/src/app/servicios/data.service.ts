import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(path: string, email: string, password: string): Observable<any> {
    let body = {
      "email": email,
      "password": password
    }
    // console.info("body",body);
    return this.http.post<any>(environment.api.uri + path, body, this.httpOptions)
      .pipe(res => res);
  }

  postWithToken(path: string, data: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({ 'token': localStorage.getItem("token") })
    };
    return this.http.post<any>(environment.api.uri + path, data, httpOptions)
      .pipe(res => res);
  }

  post(path: string, data: any): Observable<any> {

    return this.http.post<any>(environment.api.uri + path, data, this.httpOptions)
      .pipe(res => res);
  }

  upload(path: string, data: any): Observable<any>{
    return this.http.post<any>(environment.api.uri + path, data)
      .pipe(res => res);
  }

  getAll(method: string): Observable<any> {
    return this.http.get<any>(environment.api.uri + method)
      .pipe(res => res);
  }

  get(path: string) {
    return this.http.get<any>(environment.api.uri + path)
      .pipe(res => res);
  }

  delete(path: string): Observable<any> {
    // console.info("path",path);
    return this.http.post<any>(environment.api.uri + path, null, this.httpOptions)
      .pipe(res => res);
  }

  buscar(path: string): Observable<any> {
    return this.http.get<any>(environment.api.uri + path)
      .pipe(res => res);
  }

  alta(path: string, data: any): Observable<any> {
    return this.http.post<any>(environment.api.uri + path, data, this.httpOptions)
      .pipe(res => res);
  }


}
