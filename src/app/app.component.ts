import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { Weather } from './models/weather';
import { Observable, combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  cities: Observable<any>;

  currentCity: any;
  cityData: Weather;
  forecast: any[] = [];

  searchedCities: string;

  constructor(private api: ApiService, public sanitization: DomSanitizer) {
  }

  ngOnInit() {
    this.cities = this.api.getCities();
    this.api.query.subscribe(query => {
      console.log(query);
      this.searchedCities = query;
    });
  }

  select(city: any) {
    this.currentCity = city;
    const weather = this.api.getWeatherForCountry(city.name).pipe(take(1));
    const weathers = this.api.getWeather5daysForCountry(city.name).pipe(take(1));

    combineLatest(weather, weathers)
      .subscribe(([weatherData, weather5Days]) => {
        this.cityData = weatherData;
        this.forecast = weather5Days['list'];
      });
  }

  
}
