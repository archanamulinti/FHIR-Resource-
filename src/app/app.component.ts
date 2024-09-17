import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>FHIR Resource Viewer</h1>
    <nav>
      <a routerLink="/resources/Patient">Patient List 
      
      </a> |
      <a routerLink="/resources/Observation">Observation List</a>
    </nav>
    <router-outlet></router-outlet> <!-- The placeholder for routed views -->
  `,
  styles: [
    
  ]
})
export class AppComponent {}