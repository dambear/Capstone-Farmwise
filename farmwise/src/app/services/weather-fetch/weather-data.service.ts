import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private apiKey: string = 'TnNY3pRMI1daInwkzAixcCanmrBnTB3G';
  private cityKey: string = '262266';
  private baseUrl: string = 'http://dataservice.accuweather.com';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    const url = `${this.baseUrl}/forecasts/v1/daily/5day/${this.cityKey}?apikey=${this.apiKey}&language=en&details=true&metric`;
    return this.http.get(url);
  }
}