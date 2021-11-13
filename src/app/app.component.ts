import { Component, OnInit } from '@angular/core';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private session:SessionService
  ) {
    this.session.getIsLoggedIn().subscribe((value) => {
      this.isLoggedIn = value;
    });
    this.session.checkAuthentication();
  }

  ngOnInit(): void {
    
  }

}