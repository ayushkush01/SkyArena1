import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { RestroComponent } from './restro/restro.component'; // Import the new component
import { ServsComponent } from './servs/servs.component';



const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'book',
    component: BookingFormComponent,
  },
  {
    path: 'bookinglist',
    component: BookingListComponent,
  },
  {
    path: 'restro',
    component: RestroComponent
  },
  {
    path: 'servs',
    component: ServsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
