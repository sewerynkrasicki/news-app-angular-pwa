import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  API_KEY = 'your key';

  constructor(private http: HttpClient) { }

  getPlArticles(): Observable<object> {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=pl&apiKey=${this.API_KEY}`
    ).pipe(
      map(
        (data: any) => data.articles
      )
    );
  }
}
