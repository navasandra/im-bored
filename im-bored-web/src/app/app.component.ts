import { Component, OnInit } from '@angular/core';
import { ActivityDAO } from './models/ActivityDAO';
import { ActivitiesService } from './services/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'im-bored';
  activity: ActivityDAO = {} as ActivityDAO;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.activitiesService.getRandomActivity().subscribe((result) => {
      this.activity = result;
      console.log(result);
    });
  }
}
