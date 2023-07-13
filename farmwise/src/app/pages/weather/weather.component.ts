import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-fetch/weather-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
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

  iconMapping = {
    'Thunderstorms': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms.svg',
    'Rain': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg',
    'Cloudy': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg',
    'Sunny' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg',
    'Mostly Sunny' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg',
    'Partly Sunny' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg',
    'Hazy Sunshine' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/haze-day.svg',
    'Mostly Cloudy' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg',
    'Showers' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    'Mostly Cloudy w/ Showers' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    'Partly Sunny w/ Showers' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-rain.svg',
    'Mostly Cloudy w/ T-Storms' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-rain.svg',
    'Partly Sunny w/ T-Storms' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-rain.svg',
    'Partly Cloudy w/ Showers' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    'Partly Cloudy w/ T-Storms' : 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-rain.svg',
    // Add more mappings for other weather conditions
  };



}
