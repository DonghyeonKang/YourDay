CREATE TABLE `user` (
    `user_id` BIGINT(20) NOT NULL UNIQUE,
    `name` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `ShareStatus` TEXT NOT NULL,
    `alert_mode` ENUM('0', '1') NOT NULL
);

CREATE TABLE `schedule` (
    schedule_id BIGINT(20) AUTO_INCREMENT PRIMARY KEY NOT NULL UNIQUE,
    content TEXT NOT NULL,
    start_time datetime NOT NULL,
    end_time datetime NOT NULL,
    percent INT(5) NOT NULL,
    member_id BIGINT(20) NOT NULL,
    FOREIGN KEY (member_id) REFERENCES member (member_id)
);

CREATE TABLE `chart` (
    `chart_id` BIGINT(20) NOT NULL,
    `time` BIGINT(20) NOT NULL,
    `date` DATE NOT NULL,
    `member_id` BIGINT(20) NOT NULL,
    `mode` INT NOT NULL,    
    FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
);

CREATE TABLE `friend` (
    `member_id` BIGINT(20) NOT NULL,
    `name` TEXT NOT NULL,
    `friend_id` BIGINT(20) NOT NULL,
    FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
);

CREATE TABLE `alert` (
    `member_id` BIGINT(20) NOT NULL,
    `friend_id` BIGINT(20) NOT NULL,
    FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
); 

INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304070000, 20220304080000, 70, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304080000, 20220304090000, 80, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304090000, 20220304100000, 10, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304100000, 20220304110000, 70, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304110000, 20220304120000, 50, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304120000, 20220304130000, 40, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304130000, 20220304140000, 70, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304140000, 20220304150000, 80, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304150000, 20220304160000, 90, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304160000, 20220304170000, 20, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304170000, 20220304180000, 40, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304180000, 20220304190000, 80, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304190000, 20220304200000, 80, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304200000, 20220304210000, 90, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304210000, 20220304220000, 40, 123123413412414);
INSERT INTO schedule(content, start_time, end_time, percent, member_id) VALUES ('sd',  20220304220000, 20220304230000, 80, 123123413412414);