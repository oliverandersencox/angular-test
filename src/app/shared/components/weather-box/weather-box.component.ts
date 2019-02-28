import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {

  @Input() weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
