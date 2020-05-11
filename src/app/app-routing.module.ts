import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailsComponent} from "./user-details/user-details.component";


const routes: Routes = [
  { path: '', redirectTo: 'user-details', pathMatch: 'full' },
  { path: 'user-details', component: UserDetailsComponent },
  { path: '**', redirectTo: 'user-details', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
