import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Pod } from '../models/pod';

@Injectable({
  providedIn: 'root'
})
export class PodService {
  apiUrl = 'https://api.nasa.gov/planetary/apod?';
  apiKey = 'api_key=7DTscVJtTKShhiRDXVwz028It1M4fp2SaNYRaqeD';

  constructor(private http: HttpClient) { }

  public getPod(): Observable<Pod> {
    return this.http.get<Pod>(`${this.apiUrl}${this.apiKey}`)
  }
}
