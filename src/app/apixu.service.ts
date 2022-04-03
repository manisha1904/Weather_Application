import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: string){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=869b7b330a2493dc4b91cd935010b082&query=' + location
    );
}
}
