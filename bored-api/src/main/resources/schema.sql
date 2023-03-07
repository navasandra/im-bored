CREATE TABLE IF NOT EXISTS SAVED_ACTIVITIES (
    activityId int NOT NULL AUTO_INCREMENT,
    activity varchar(255) NOT NULL,
    accessibility decimal(2,2),
    participants int,
    price decimal(2,2),
    activityType varchar(255),
    comment varchar(255),
    activityKey varchar(255),
    link varchar(255),
    PRIMARY KEY (activityId)
);