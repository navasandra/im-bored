package com.bored.boredapi.activities.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bored.boredapi.activities.model.ActivityDAO;

@RestController
@RequestMapping(path = "/bored-api/activities")
public class ActivitiesRestController {

	@RequestMapping(value = "/get-activity", method = RequestMethod.GET)
	public ActivityDAO getActivity() {
		ActivityDAO activity = new ActivityDAO();
		activity.setActivity("test");
		return activity;
	}
}
