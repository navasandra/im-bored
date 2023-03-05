import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  REST_URL: string = '/api';
  BORED_API: string = '/bored-api/activities';

  constructor(private http: HttpClient) {}

  getRandomActivity(): Observable<Activity> {
    const url = this.REST_URL + '/activity';
    return this.http.get<Activity>(url);
  }

  saveActivity(activity: Activity): Observable<null> {
    const url = this.BORED_API + '/save-activity';
    return this.http.post<null>(url, activity);
  }

  getMyActivities(): Observable<Array<Activity>> {
    const url = this.BORED_API + '/get-my-activities';
    return this.http.get<Array<Activity>>(url);
  }

  updateSavedActivity(activity: Activity): Observable<null> {
    const url = this.BORED_API + '/update-activity';
    return this.http.post<null>(url, activity);
  }

  deleteSavedActivity(activity: Activity): Observable<null> {
    const url = this.BORED_API + '/delete-activity';
    return this.http.post<null>(url, activity);
  }
}
