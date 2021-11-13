import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  submit_login() {
    console.log('submitting login');
  }

  triggerPasswordReset() {
    console.log('triggering pw reset');
  }

}
