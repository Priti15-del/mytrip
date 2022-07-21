import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { CancalComponent } from './flight-status/cancal/cancal.component';
import { CompleteComponent } from './flight-status/complete/complete.component';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ' '
  },

  {
    component: HomeComponent,
    path: 'home',
     },
  {
    component: BookTicketComponent,
    path: 'book'
  },
  {
    component: NavbarComponent,
    path: 'navbar '
  },

  {
    component: FlightStatusComponent,
  
  path: 'flight',
  children:[
    {path:'demo1',component: CancalComponent },
    {path:'demo2',component: CompleteComponent }

  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTripRoutingModule { }
