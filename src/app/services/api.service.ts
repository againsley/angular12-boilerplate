import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl: string = environment.apiBaseUrl;

  constructor(
    private http:HttpClient,
    private session:SessionService,
  ) { }

  get(object:string, id?:number): Observable<any> {

    let targetUrl = this.apiBaseUrl + object + '/';
    if ( id ) {
      targetUrl += id + '/';
    }

    return this.http.get(
      targetUrl,
      this.getHeaders()  
    );
  }

  post(object:string, data:any, id:number): Observable<any> {
    return this.http.post(
      this.apiBaseUrl + object + '/' + id + '/',
      data,
      this.getHeaders() 
    );
  }

  put(object:string, data:any): Observable<any> {

console.log('here submit ', object, data);


    return this.http.put(
      this.apiBaseUrl + object + '/',
      data,
      this.getHeaders() 
    );
  }

  private getHeaders():any {
    const headers = {
      headers: {'Authorization': 'Bearer ' + this.session.getToken()}
    } 
  }

  testMe() {
    return "srv";
  }
}