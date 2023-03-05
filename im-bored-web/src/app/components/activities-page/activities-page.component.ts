import { Component } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css'],
})
export class ActivitiesPageComponent {
  selectedActivity: Activity = {} as Activity;
  activityToEdit: Activity = {} as Activity;

  activityIsSelected: boolean = false;
  activitiesList: Activity[] = [];
  showTable = false;
  showDialog = false;

  constructor(private activitiesService: ActivitiesService) {}

  getRandomActivity(): void {
    this.activitiesService.getRandomActivity().subscribe((result) => {
      this.selectedActivity = result;
      this.activityIsSelected = true;
    });
  }

  addActivity(activity: Activity): void {
    this.activitiesService.saveActivity(activity).subscribe(() => {
      if (this.showTable) {
        this.activitiesService.getMyActivities().subscribe((result) => {
          this.activitiesList = result;
        });
      }
    });
    this.getRandomActivity();
  }

  getMyActivities(): void {
    if (!this.showTable) {
      this.activitiesService.getMyActivities().subscribe((result) => {
        this.activitiesList = result;
      });
    }
    this.showTable = !this.showTable;
  }

  editActivity(activity: Activity): void {
    this.activityToEdit = activity;
    this.showDialog = true;
  }

  updateActivity(activity: Activity): void {
    this.activitiesService.updateSavedActivity(activity).subscribe(() => {
      this.showTable = false;
      this.getMyActivities();
    });
    this.showDialog = false;
  }

  deleteActivity(activity: Activity): void {
    this.activitiesService.deleteSavedActivity(activity).subscribe(() => {
      this.showTable = false;
      this.getMyActivities();
    });
    this.showDialog = false;
  }
}
