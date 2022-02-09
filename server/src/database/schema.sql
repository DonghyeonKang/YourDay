CREATE TABLE `achievement_log` (
    `mode` ENUM('0', '1') NOT NULL,
    `date` DATE NOT NULL
);

CREATE TABLE `member` (
    `member_id` BIGINT(20) NOT NULL UNIQUE,
    `name` TEXT NOT NULL,
    `alert_mode` ENUM('0', '1') NOT NULL
);

CREATE TABLE `schedule` (
    `schedule_id` BIGINT(20) NOT NULL UNIQUE,
    `content` TEXT NOT NULL,
    `start_time` TIME NOT NULL,
    `end_time`TIME NOT NULL,
    `member_id` BIGINT(20) NOT NULL,
    FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
);

CREATE TABLE `achievement` (
    `schedule_id` BIGINT(20) NOT NULL,
    `time_id` BIGINT(20) NOT NULL,
    `percent` INT(5) NOT NULL,
    `date` DATE NOT NULL,
    `member_id` BIGINT(20) NOT NULL,
    FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
    FOREIGN KEY (`schedule_id`) REFERENCES `schedule` (`schedule_id`)
);

CREATE TABLE `social` (
    `member_id` BIGINT(20) NOT NULL,
    `friend_Id` BIGINT(20) NOT NULL,
    FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
);

CREATE TABLE `alert` (
    `member_id` BIGINT(20) NOT NULL,
    `friend_id` BIGINT(20) NOT NULL,
    FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
);