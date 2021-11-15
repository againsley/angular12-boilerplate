import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sessionData: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() {}

  checkAuthentication(): void {

    // For testing purposes only, this overrides auth
    this.setIsLoggedIn(true);
    return;
    

    // // Make sure the token exists
    // const token = localStorage.getItem('token');
    // if ( !token ) {
    //   console.error('No token found');
    //   this.setIsLoggedIn(false);
    //   return;
    // }

    // // Make sure the token is not empty
    // const tokenPayload:any = decode(token);
    // if ( !tokenPayload ) {
    //   console.error('No token payload');
    //   localStorage.removeItem('token');
    //   this.setIsLoggedIn(false);
    //   return;
    // }

    // // Check for expired JWT token
    // const tokenExpiresAt = tokenPayload.exp * 1000;
    // const now = Date.now();
    // if ( tokenExpiresAt <= now ) {
    //   console.error('Token expired');
    //   this.logout();
    //   return;
    // }

    // // Make sure we have an email in the token
    // if ( tokenPayload.userEmail ) {
    //   this.setSessionData({ 
    //     userEmail: tokenPayload.userEmail
    //   });
    //   this.setIsLoggedIn(true);
    //   return;
    // }

    // console.error('Default token fail');
    // this.setIsLoggedIn(false);
    // return;
  }

  logout() {
    // TODO - do we want to proactively delete backend session here?
    // strictly speaking don't have to but is it better to not leave 
    // orphaned sessions in DB?
    localStorage.removeItem('token');
    this.setIsLoggedIn(false);
    this.setSessionData({});
  }

  getToken() {
    // TODO - do we need to check for validity here?
    const token = localStorage.getItem('token');
    return token;
  }

  // isLoggedIn observable handlers
  public getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  setIsLoggedIn(newValue: boolean): void {
    this.isLoggedIn.next(newValue);
  }

  // sessionData observable handlers
  public getSessionData(): Observable<any> {
    return this.sessionData.asObservable();
  }

  setSessionData(newValue: any): void {
    this.sessionData.next(newValue);
  }

}
