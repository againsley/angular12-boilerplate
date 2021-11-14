import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectConfigService {

  application = {
    displayTitle: "Angular 12 Boilerplate",
    configTitle: "angular12-boilerplate",
    version: "0.0.1"
  };

  constructor() { }

  get applicationTitle() { return this.application.displayTitle; }
  get applicationConfigTitle() { return this.application.configTitle; }
  get applicationVersion() { return this.application.version; }
}
