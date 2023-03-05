package com.bored.boredapi.logic;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.bored.boredapi.activities.model.Activity;

@Service
public class ActivityService {

	ArrayList<Activity> savedActivities = new ArrayList<>();

	public void addNewActivity(Activity activity) throws Exception {

		for (Activity activitySaved : savedActivities) {
			if (activitySaved.getKey().equals(activity.getKey())) {
				throw new Exception();
			}
		}
		this.savedActivities.add(activity);
	}

	public ArrayList<Activity> getMyActivities() throws Exception {
		return this.savedActivities;
	}

	public void updateActivity(Activity activity) throws Exception {
		for (Activity activitySaved : savedActivities) {
			if (activitySaved.getKey().equals(activity.getKey())) {
				activitySaved.setComment(activity.getComment());
				activitySaved.setLink(activity.getLink());
				break;
			}
		}
	}

	public void deleteActivity(Activity activity) throws Exception {
		savedActivities.removeIf(a -> a.getKey().equals(activity.getKey()));
	}
}
