import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
