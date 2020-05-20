import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>
    (`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3e42a364f7134ee0a2f2dda33b20cb11`);
  }

}
