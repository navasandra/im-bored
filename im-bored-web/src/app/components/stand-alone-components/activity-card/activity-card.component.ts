import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ActivityCardComponent {
  @Input() activity: Activity = {} as Activity;
  @Input() showAddSkipButtons: boolean = true;
  @Input() fromSelectedList: boolean = false;
  @Output() skipActivity = new EventEmitter<unknown>();
  @Output() addActivity = new EventEmitter<Activity>();
  @Output() editActivity = new EventEmitter<Activity>();
  @Output() deleteActivity = new EventEmitter<Activity>();
}
