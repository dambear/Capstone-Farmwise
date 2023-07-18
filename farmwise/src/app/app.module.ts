
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';



import { SidebarComponent } from './sharepage/sidebar/sidebar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AddfarmerComponent } from './pages/addfarmer/addfarmer.component';
import { FarmerComponent } from './pages/farmer/farmer.component';
import { UpdatefarmerComponent } from './pages/updatefarmer/updatefarmer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    WeatherComponent,
    AddfarmerComponent,
    FarmerComponent,
    UpdatefarmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
