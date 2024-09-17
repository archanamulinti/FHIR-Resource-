import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FhirService } from '../../services/fhir.service';

@Component({
  selector: 'app-resource-details',
  template: `
    <div *ngIf="resource">
       <h3>{{ resourceType }} Details (ID: {{ resource.id }})</h3>
      <pre>{{ resource | json }}</pre>
    </div>
  `,
  styles: []
})
export class ResourceDetailsComponent implements OnInit {
  resource: any;
  resourceType: string='';
  resourceId: string='';

  constructor(private route: ActivatedRoute, private fhirService: FhirService) {
    this.resourceType;
    this.resourceId;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.resourceType = params['resourceType'];
      this.resourceId = params['id'];
      this.loadResource();
    });
  }

  loadResource(): void {
    this.fhirService.getResourceDetails(this.resourceType, this.resourceId).subscribe((data) => {
      this.resource = data;
    });
  }
}