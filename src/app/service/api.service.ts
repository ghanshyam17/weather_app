
import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 

@Injectable()
export class ApiService {
 
  baseURL: string = "https://api.openweathermap.org/";
 
  constructor(private http: HttpClient) {
  }
 
  getWeatherUpdate(city: string): Observable<any> {
    return this.http.get(this.baseURL + '/data/2.5/weather?q=' + city + '&units=metric&appid=3c2a41a314c0e4effffd044d1bbecb32')
  }
 
}