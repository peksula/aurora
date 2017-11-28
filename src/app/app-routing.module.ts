import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrienteerersComponent } from './orienteerers/orienteerers.component';
import { OrienteererDetailComponent } from './orienteerer-detail/orienteerer-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orienteerer/:id', component: OrienteererDetailComponent },
  { path: 'orienteerers', component: OrienteerersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}