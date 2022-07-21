import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTripRoutingModule } from './my-trip-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { CompleteComponent } from './flight-status/complete/complete.component';
import { CancalComponent } from './flight-status/cancal/cancal.component';
import { UpcomingComponent } from './flight-status/upcoming/upcoming.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    BookTicketComponent,
    FlightStatusComponent,
    CompleteComponent,
    CancalComponent,
    UpcomingComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MyTripRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyTripModule { }
