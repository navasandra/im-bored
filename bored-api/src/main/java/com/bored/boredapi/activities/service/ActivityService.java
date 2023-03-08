package com.bored.boredapi.activities.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.bored.boredapi.activities.model.Activity;

@Service
public class ActivityService {

	private final String path = "jdbc:h2:~/test";
	private final String username = "sa";
	private final String password = "";

	public void addNewActivity(Activity activity) throws Exception {
		try {
			Connection myCon = DriverManager.getConnection(path, username, password);

			String query = "INSERT INTO saved_activities(activity, accessibility, participants, price, activityType, comment, activityKey) VALUES (?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement pstmt = myCon.prepareStatement(query);
			pstmt.setString(1, activity.getActivity());
			pstmt.setDouble(2, activity.getAccessibility());
			pstmt.setDouble(3, activity.getParticipants());
			pstmt.setDouble(4, activity.getPrice());
			pstmt.setString(5, activity.getType());
			pstmt.setString(6, activity.getComment());
			pstmt.setString(7, activity.getKey());
			pstmt.executeUpdate();
			myCon.close();
		} catch (Exception ex1) {
			throw new Exception("An error occured when saving new activity");
		}
	}

	public ArrayList<Activity> getMyActivities() throws Exception {
		ArrayList<Activity> savedActivities = new ArrayList<>();
		try {
			Connection myCon = DriverManager.getConnection(path, username, password);
			Statement stmt = myCon.createStatement();
			try (ResultSet rs = stmt.executeQuery("SELECT * FROM saved_activities");) {
				while (rs.next()) {
					Activity activity = new Activity();
					activity.setActivityId(Integer.parseInt(rs.getString(1)));
					activity.setActivity(rs.getString(2));
					activity.setAccessibility(Double.parseDouble(rs.getString(3)));
					activity.setParticipants(Integer.parseInt(rs.getString(4)));
					activity.setPrice(Double.parseDouble(rs.getString(5)));
					activity.setType(rs.getString(6));
					activity.setComment(rs.getString(7));
					activity.setKey(rs.getString(8));
					activity.setLink(rs.getString(9));
					savedActivities.add(activity);
				}
				myCon.close();
			} catch (Exception ex1) {
				throw new Exception("An error occured when processing the result set");
			}
		} catch (Exception ex2) {
			throw new Exception("An error occured when retrieving the list of saved activities");
		}
		return savedActivities;
	}

	public void updateActivity(Activity activity) throws Exception {
		try {
			Connection myCon = DriverManager.getConnection(path, username, password);
			String query = "UPDATE saved_activities set link = ?, comment = ? where activityId = ?";
			PreparedStatement pstmt = myCon.prepareStatement(query);
			pstmt.setString(1, activity.getLink());
			pstmt.setString(2, activity.getComment());
			pstmt.setInt(3, activity.getActivityId());
			pstmt.executeUpdate();
			myCon.close();
		} catch (Exception ex1) {
			throw new Exception("An error occured when updating activity with id" + activity.getActivityId());
		}
	}

	public void deleteActivity(Activity activity) throws Exception {
		try {
			Connection myCon = DriverManager.getConnection(path, username, password);
			String query = "delete from saved_activities where activityId = ?";
			PreparedStatement pstmt = myCon.prepareStatement(query);
			pstmt.setInt(1, activity.getActivityId());
			pstmt.executeUpdate();
			myCon.close();
		} catch (Exception ex1) {
			throw new Exception("An error occured deleting activity with id" + activity.getActivityId());
		}
	}
}
