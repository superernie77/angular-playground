import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { DataBindingAssignmentComponent } from './data-binding-assignment/data-binding-assignment.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment.component';
import { CustomPropertyComponent } from './custom-property/custom-property.component';
import { CustomEventComponent } from './custom-event/custom-event.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { BasicHighlightDirective } from './even-odd/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './even-odd/better-highlight/better-highlight.directive';
import { UnlessDirective } from './even-odd/unless/unless.directive';
import { AccountComponent } from './account-example/account/account.component';
import { NewAccountComponent } from './account-example/new-account/new-account.component';
import { AccountExampleComponent } from './account-example/account-example.component';
import { AccountsService } from './account-example/accounts.service';
import { LoggingService } from './account-example/logging.service';
import { AppCustomDirectiveParentComponent } from './app-custom-directive-parent/app-custom-directive-parent.component';
import { HighlightDirective } from './app-custom-directive-parent/app-highlight-directive/app-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assignment2Component,
    Assignment1Component,
    DataBindingAssignmentComponent,
    DirectiveAssignmentComponent,
    CustomPropertyComponent,
    CustomEventComponent,
    EvenOddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    AccountExampleComponent,
    AppCustomDirectiveParentComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
