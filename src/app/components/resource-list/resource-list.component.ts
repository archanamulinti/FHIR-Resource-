import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FhirService } from '../../services/fhir.service';

@Component({
  selector: 'app-resource-list',
  template: `
    <div class="container">
      <h2>{{ resourceType }} List</h2>
      <ul>
        <li *ngFor="let resource of resources">
          <a [routerLink]="['/resource', resourceType, resource.resource.id]">
             {{ resource.resource.id }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class ResourceListComponent implements OnInit {
  resourceType: string='';
  resources: any[] = [];

  constructor(private fhirService: FhirService, private route: ActivatedRoute) {
    this.resourceType;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.resourceType = params['resourceType']; // Fetch 'resourceType' from the route
      this.loadResources();
    });
  }

  loadResources(): void {
    this.fhirService.getResources(this.resourceType).subscribe((data) => {
      this.resources = data.entry || [];
    });
  }
}