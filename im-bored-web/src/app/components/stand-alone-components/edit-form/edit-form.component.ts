import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class EditFormComponent implements OnChanges {
  @Input() activityToEdit: Activity = {} as Activity;
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() updateActivity = new EventEmitter<Activity>();

  form = new FormGroup({
    activity: new FormControl<string>({ value: '', disabled: true }),
    type: new FormControl<string>({ value: '', disabled: true }),
    participants: new FormControl<number>({ value: 0, disabled: true }),
    price: new FormControl<number>({ value: 0, disabled: true }),
    link: new FormControl<string>(''),
    key: new FormControl<string>({ value: '', disabled: true }),
    accessibility: new FormControl<number>({ value: 0, disabled: true }),
    comment: new FormControl<string>('', Validators.required),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activityToEdit'].currentValue) {
      this.setData(changes['activityToEdit'].currentValue as Activity);
    }
  }

  setData(activity: Activity): void {
    this.form.reset();
    this.form.controls.activity.setValue(activity.activity);
    this.form.controls.type.setValue(activity.type);
    this.form.controls.participants.setValue(activity.participants);
    this.form.controls.price.setValue(activity.price);
    this.form.controls.link.setValue(activity.link);
    this.form.controls.key.setValue(activity.key);
    this.form.controls.accessibility.setValue(activity.accessibility);
    this.form.controls.comment.setValue(activity.comment);
  }

  saveActivity(): void {
    const activity = {
      activity: this.form.controls.activity.value as string,
      type: this.form.controls.type.value as string,
      participants: this.form.controls.participants.value as number,
      price: this.form.controls.price.value as number,
      link: this.form.controls.link.value as string,
      key: this.form.controls.key.value as string,
      accessibility: this.form.controls.accessibility.value as number,
      comment: this.form.controls.comment.value as string,
    };
    this.updateActivity.emit(activity);
  }
}
