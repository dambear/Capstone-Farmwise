import { Component } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-fetch/weather-data.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  weatherData: any;
  currentWeatherDetails: any;

  constructor(private weatherService: WeatherDataService) { }

  

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data.DailyForecasts;  
    });
  }


  fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }

}
