import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private _http:HttpClient) { }

  //news api url 

  newsApiuUrl = "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json";

  //topheading
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiuUrl);
  }
}
