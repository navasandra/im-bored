import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityDAO } from '../models/ActivityDAO';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  REST_URL: string = '/bored-api/activities';

  constructor(private http: HttpClient) {}

  getRandomActivity(): Observable<ActivityDAO> {
    const url = this.REST_URL + '/get-activity';
    return this.http.get<ActivityDAO>(url);
  }
}
