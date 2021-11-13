import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  isLoggedIn: boolean = false;

  constructor(
    public router: Router,
    private session:SessionService
  ) {
    this.session.getIsLoggedIn().subscribe((value) => {
      this.isLoggedIn = value;
    });
    this.session.checkAuthentication();
  }

  canActivate(): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
