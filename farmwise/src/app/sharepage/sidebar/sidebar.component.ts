import { Component } from '@angular/core';

import { WeatherDataService } from 'src/app/services/weather-fetch/weather-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  
  

  currentTime: string = '';


  weatherData: any;
  currentWeatherDetails: any;

  constructor(private weatherService: WeatherDataService) { }

  
  

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data.DailyForecasts;  
    });


    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);




    

    

    
  }

  updateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Manila' };
    this.currentTime = now.toLocaleTimeString('en-US', options);
  }

 

  calculateAverageTemperature(minTemperature: number, maxTemperature: number) {
    
    const averageTemperature = (minTemperature + maxTemperature) / 2;
    const averageTemperatureCelsius = (averageTemperature - 32) * 5 / 9;
    return averageTemperatureCelsius;
  }

  

  

  getWeatherIcon(IconPhrase: string): string {
    const defaultIcon = 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg'; // Default icon if condition is not found in the mapping
  
    if (!IconPhrase) {
      console.log('Condition is undefined or empty');
      return defaultIcon;
    }
  
    
  
    console.log('Condition:', IconPhrase);
    console.log('Mapped Icon:', this.weatherIconMapping[IconPhrase]);
  
    return this.weatherIconMapping[IconPhrase] || defaultIcon;
  }
  
  weatherIconMapping: { [key: string]: string } = {
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
    // Add more mappings for different weather conditions
  };



}
