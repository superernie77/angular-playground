import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { DataBindingAssignmentComponent } from './data-binding-assignment/data-binding-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assignment2Component,
    Assignment1Component,
    DataBindingAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
