import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FhirService {
  private fhirApiUrl = 'https://hapi.fhir.org/baseR4'; 

  constructor(private http: HttpClient) {}

  // Fetch list of resources based on the resource type (Patient or Observation)
  getResources(resourceType: string): Observable<any> {
    return this.http.get(`${this.fhirApiUrl}/${resourceType}`);
  }

  // Fetch details of a resource based on its type and ID
  getResourceDetails(resourceType: string, resourceId: string): Observable<any> {
    return this.http.get(`${this.fhirApiUrl}/${resourceType}/${resourceId}`);
  }
}