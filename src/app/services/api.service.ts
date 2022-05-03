import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

apiKey = 'f8aed209fcc64c9a88db4dabd6720960'

  constructor(private _http: HttpClient) { }
  getFeatured (category: string){
    let url: string = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}&pageSize=50&sortBy=popularity`;
    return this._http.get(url);
  }
  getEverything (query: string){
    let url: string = `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.apiKey}&pageSize=50&language=en&sortBy=popularity`;
    return this._http.get(url);
  }
}




