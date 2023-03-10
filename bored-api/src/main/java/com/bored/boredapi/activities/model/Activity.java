package com.bored.boredapi.activities.model;

public class Activity {

	private Integer activityId;

	private String activity;

	private String type;

	private Integer participants;

	private Double price;

	private String link;

	private String key;

	private Double accessibility;

	private String comment;

	public Activity() {
	};

	public Activity(Integer activityId, String activity, String type, Integer participants, Double price, String link,
			String key, Double accessibility, String comment) {
		this.activityId = activityId;
		this.activity = activity;
		this.type = type;
		this.participants = participants;
		this.price = price;
		this.link = link;
		this.key = key;
		this.accessibility = accessibility;
		this.comment = comment;
	};

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getParticipants() {
		return participants;
	}

	public void setParticipants(Integer participants) {
		this.participants = participants;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public Double getAccessibility() {
		return accessibility;
	}

	public void setAccessibility(Double accessibility) {
		this.accessibility = accessibility;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Integer getActivityId() {
		return activityId;
	}

	public void setActivityId(Integer activityId) {
		this.activityId = activityId;
	}

}
