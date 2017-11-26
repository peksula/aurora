import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrienteerersComponent } from './orienteerers/orienteerers.component';


@NgModule({
  declarations: [
    AppComponent,
    OrienteerersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
