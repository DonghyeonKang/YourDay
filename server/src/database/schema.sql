CREATE TABLE achievement_log (
    alert_mode ENUM NOT NULL,
    date DATE NOT NULL
);

CREATE TABLE achievement (
    time_id BIGINT(20) NOT NULL,
    percent INT(5) NOT NULL,
    date DATE NOT NULL,
    member_id BIGINT(20) NOT NULL,
    schedule_id BIGINT(20) NOT NULL,
    FOREIGN KEY (member_id) REFERENCES member (member_id),
    FOREIGN KEY (schedule_id) REFERENCES member (schedule_id)
);

CREATE TABLE member (
    member_id BIGINT(20) NOT NULL,
    name TEXT NOT NULL,
    alert_status ENUM NOT NULL
);

CREATE TABLE social (
    member_id BIGINT(20) NOT NULL,
    friend_Id BIGINT(20) NOT NULL,
    FOREIGN KEY (member_id) REFERENCES member (member_id)
);

CREATE TABLE schedule (
    schedule_id BIGINT(20) NOT NULL,
    content TEXT NOT NULL,
    start_time TIME NOT NULL,
    end_timeTIME NOT NULL,
    member_id BIGINT(20) NOT NULL,
    FOREIGN KEY (member_id) REFERENCES member (member_id)
);

CREATE TABLE alert (
    member_id BIGINT(20) NOT NULL,
    friend_id BIGINT(20) NOT NULL,
    FOREIGN KEY (member_id) REFERENCES member (member_id)
);