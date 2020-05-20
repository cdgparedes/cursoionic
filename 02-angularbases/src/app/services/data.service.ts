import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// asegurarnos que sea de aqui que se importe
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Significa el calcance 
})
export class DataService {

  constructor( private http: HttpClient) { }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe( tap(console.log));
  }
}
