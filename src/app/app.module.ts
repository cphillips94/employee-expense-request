import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RequestComponent } from './employee/request/request.component';
import { StatusOfTicketComponent } from './manager/status-of-ticket/status-of-ticket.component';
import { ViewTicketsComponent } from './manager/view-tickets/view-tickets.component';
import { ViewEmployeeComponent } from './manager/view-employee/view-employee.component';
import { ReviewTicketsComponent } from './employee/review-tickets/review-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    RequestComponent,
    StatusOfTicketComponent,
    ViewTicketsComponent,
    ViewEmployeeComponent,
    ReviewTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
