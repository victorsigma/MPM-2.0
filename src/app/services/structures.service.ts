import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Structure } from '../models/Structures';

@Injectable({
  providedIn: 'root'
})
export class StructuresService {

  private myAppUrl = 'http://localhost:3000/'
  private myApiUrl = 'api/Structures/'
  constructor(private http:HttpClient) { }

  public getStructures(): Observable<any> {
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }

  public getStructure(structure: string): Observable<any> {
    return this.http.get(this.myAppUrl+this.myApiUrl+structure);
  }
}
