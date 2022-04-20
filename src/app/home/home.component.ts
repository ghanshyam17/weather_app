import { Component, OnInit } from '@angular/core';
import { WeatherMain } from '../model/temp.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  errorMessage: string = "";
  city: string = "Toronto";
  currentTemperature: string = "NA";
  feelsLikeTemperature: string = "NA";
  currentDate: number = Date.now();
  timeIntervalId: any;
  weatherResponse: WeatherMain = new WeatherMain;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.initTime()
    this.getWeather();
  }

  initTime() {
    this.timeIntervalId = setInterval(() => {
      this.currentDate = Date.now();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timeIntervalId) {
      clearInterval(this.timeIntervalId);
    }
  }

  public getWeather() {
    this.loading = true;
    this.errorMessage = "";
    this.apiService.getWeatherUpdate(this.city)
    .subscribe((response) => {
      console.log('response received', response)
      this.weatherResponse = response;
      this.currentTemperature = this.weatherResponse.main.temp + " °C";
      this.feelsLikeTemperature = this.weatherResponse.main.feels_like + " °C";
    })
      
  }
}
