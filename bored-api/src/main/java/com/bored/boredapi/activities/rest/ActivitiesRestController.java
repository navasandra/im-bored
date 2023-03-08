package com.bored.boredapi.activities.rest;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bored.boredapi.activities.model.Activity;
import com.bored.boredapi.activities.service.ActivityService;

@RestController
@RequestMapping(path = "/bored-api/activities")
public class ActivitiesRestController {

	@Autowired
	ActivityService activityService;

	@RequestMapping(value = "/save-activity", method = RequestMethod.POST)
	public ResponseEntity<Object> saveActivity(@RequestBody Activity activity) throws Exception {
		activityService.addNewActivity(activity);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}

	@RequestMapping(value = "/update-activity", method = RequestMethod.POST)
	public ResponseEntity<Object> updateActivity(@RequestBody Activity activity) throws Exception {
		activityService.updateActivity(activity);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}

	@RequestMapping(value = "/delete-activity", method = RequestMethod.POST)
	public ResponseEntity<Object> deleteActivity(@RequestBody Activity activity) throws Exception {
		activityService.deleteActivity(activity);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}

	@RequestMapping(value = "/get-my-activities", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<Activity>> getMyActivities() throws Exception {
		return new ResponseEntity<ArrayList<Activity>>(activityService.getMyActivities(), HttpStatus.OK);
	}
}
