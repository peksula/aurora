import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { OrienteerersComponent } from './orienteerers/orienteerers.component';
import { OrienteererDetailComponent } from './orienteerer-detail/orienteerer-detail.component';
import { OrienteererService } from './orienteerer.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    OrienteerersComponent,
    OrienteererDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [OrienteererService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
