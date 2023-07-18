import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AddfarmerComponent } from './pages/addfarmer/addfarmer.component';
import { FarmerComponent } from './pages/farmer/farmer.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {path: 'dash', component:DashboardComponent, pathMatch: 'full'},
  {path: 'newfarmer', component:AddfarmerComponent, pathMatch: 'full'},
  {path: 'farmer', component:FarmerComponent, pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
