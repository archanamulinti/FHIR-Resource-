import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceDetailsComponent } from './components/resource-detail/resource-detail.component';
//import { ResourceDetailComponent } from './components/resource-detail/resource-detail.component';
// Define routes for 'Patient' and 'Observation' resource types
const appRoutes: Routes = [
  { path: '', redirectTo: '/resources/Patient', pathMatch: 'full' }, // Default route
  { path: 'resources/:resourceType', component: ResourceListComponent }, // Route for resource lists
  { path: 'resource/:resourceType/:id', component: ResourceDetailsComponent } // Route for resource details
];

@NgModule({
  declarations: [
    AppComponent,
    ResourceListComponent,
    ResourceDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule to make HTTP requests
    RouterModule.forRoot(appRoutes) // Configure routing with RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }