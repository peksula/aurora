import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { OrienteerersComponent } from './orienteerers/orienteerers.component';
import { OrienteererDetailComponent } from './orienteerer-detail/orienteerer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    OrienteerersComponent,
    OrienteererDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
