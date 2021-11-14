import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 

import { ProjectConfigService } from '../../services/project-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  applicationTitle:string;
  email = new FormControl('');
  password = new FormControl('');

  constructor(
    projectConfig: ProjectConfigService
  ) {
    this.applicationTitle = projectConfig.applicationTitle;
  }

  ngOnInit(): void {
  }

  submit_login() {
    console.log('submitting login');
  }

  triggerPasswordReset() {
    console.log('triggering pw reset');
  }

}
