import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';
 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getResource(url : string){
      return this.http.get( Constants.dbPath + url);
  }
}
