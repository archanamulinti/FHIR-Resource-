import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceDetailsComponent } from './components/resource-detail/resource-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/resources', pathMatch: 'full' },
  { path: 'resources', component: ResourceListComponent },
  { path: 'resources/:resourceType/:id', component: ResourceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }