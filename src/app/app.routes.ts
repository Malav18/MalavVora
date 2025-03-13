import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home
    { path: 'home', component: HomeComponent },
    // Add other routes as needed
  ];
  
