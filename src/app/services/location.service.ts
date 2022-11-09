import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private myGeoApi: string = 'https://ipgeolocation.abstractapi.com/v1/?api_key=56da8e8fe10b4e11908749c551d1d36f';

  constructor(private http: HttpClient) { 
    
  }

  public getLocate(): Observable<any> {
    return this.http.get(this.myGeoApi)
  }
}
