import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Weather } from 'src/app/models/weather';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
  weather5dayUrl = 'http://api.openweathermap.org/data/2.5/forecast?units=metric&q=';
  appId = '194333f5b09188fbda8c4a3bbfea30b2';

  query = new BehaviorSubject<string>(null);

  cityData = [
    {
      name: 'London',
      image: 'https://assets.playtech.com/application/files/8815/0114/8822/Greater_London_1920x1080.jpg?version=1550746233',
      icon: 'uk.svg'
    },
    {
      name: 'Amsterdam',
      image: 'https://images.musement.com/cover/0002/15/amsterdam_header-114429.jpeg',
      icon: 'netherlands.svg'
    },
    {
      name: 'New York',
      icon: 'united-states.svg',
      image: 'https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-05/9dbea438bcd305129064e4a048cc6b52.jpeg?itok=d3L2A_Rd'
    },
    {
      name: 'Moscow',
      icon: 'russia.svg',
      image: 'https://media.jtdwjcwq6f4wp4ce.com/pc/Moskova.jpg'
    },
    {
      name: 'Brussels',
      icon: 'belgium.svg',
      image: 'https://www.cisl.cam.ac.uk/about/contact/brussels/images/brussels.jpg'
    },
    {
      name: 'Rio de Janeiro',
      icon: 'brazil.svg',
      image: 'https://strawberrytours.com/images/RioDeJaneiro/Tours/FreeHistoricalCenterTourOfRio/rio-de-janeiro-cover-v3.jpg'
    },
    {
      name: 'Cape Town',
      icon: 'south-africa.svg',
      image: 'https://r7h9p6s7.stackpathcdn.com/wp-content/uploads/2011/11/qqqqqqqqqqq.jpg'

    },
    {
      name: 'Denpassar',
      icon: 'indonesia.svg',
      image: 'https://www.exoticca.co.uk/magazine/wp-content/uploads/2018/01/The-5-most-beautiful-places-to-visit-in-Indonesia.jpg'
    },
    {
      name: 'Glasgow',
      icon: 'scotland.svg',
      image: 'https://peoplemakeglasgow.com/images/Clydeside1.jpg'
    },
    {
      name: 'Paris',
      icon: 'france.svg',
      image: 'https://odis.homeaway.com/odis/destination/813dfd25-7a08-4eef-a489-58bcb071f03d.hw1.jpg'
    }
  ];

  constructor(private http: HttpClient) {
  }

  public getWeatherForCountry(city: string): Observable<Weather> {

    const url = `${this.weatherUrl}${city}&appId=${this.appId}`;

    return this.http.get<Weather>(url);
  }

  public getWeather5daysForCountry(city: string): Observable<Weather> {

    const url = `${this.weather5dayUrl}${city}&appId=${this.appId}`;

    return this.http.get<Weather>(url);
  }

  getCities(): Observable<any> {
    return of(this.cityData);
  }
}
