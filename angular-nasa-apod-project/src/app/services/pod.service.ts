import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pod } from '../models/pod';

@Injectable({
  providedIn: 'root'
})
export class PodService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod?';
  private apiKey = 'api_key=7DTscVJtTKShhiRDXVwz028It1M4fp2SaNYRaqeD';

  constructor(private http: HttpClient) { }

  public getPod(date: string | undefined): Observable<Pod> {
    const url = `${this.apiUrl}${this.apiKey}`;
    return date ? this.http.get<Pod>(`${url}`) : this.http.get<Pod>(`${url}&date=${date}`)
  }
}
