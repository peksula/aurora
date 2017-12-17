import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrienteerersComponent } from './orienteerers/orienteerers.component';
import { OrienteererDetailComponent } from './orienteerer-detail/orienteerer-detail.component';
import { SetCourseComponent } from './set-course/set-course.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orienteerer/:id', component: OrienteererDetailComponent },
  { path: 'orienteerers', component: OrienteerersComponent },
  { path: 'setcourse' , component: SetCourseComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'track/:id', component: SetCourseComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
