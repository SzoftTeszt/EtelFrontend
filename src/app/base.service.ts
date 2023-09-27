import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  private serverUrl="http://localhost:3000/etelek/"

  readAll(){
      return this.http.get(this.serverUrl)
  }


}
