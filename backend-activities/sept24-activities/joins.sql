
CREATE TABLE notes (
    id int NOT NULL PRIMARY KEY,
    body varchar(255),
    student_id int
);


INSERT INTO notes (id, body, student_id) VALUES
    (1, 'Javascript is fun.', 1),
    (2, 'I attend school and work to complete my day.', 2),
    (3, 'We celebrated our birthdays together.', 2),
    (4, 'I want to learn React Native.', 2),
    (5, 'My plan is to build iOS apps in the future.', 3),
    (6, 'I want to collaborate with real-world projects to help the community.', 3),
    (7, 'I ate Kare-Kare for lunch today.', 4),
    (8, 'Squid Game is an interesting Netflix series.', 5),
    (9, 'John Wick is my favorite movie series of all-time.', NULL),
    (10, 'I want to be a successful React web developer.', NULL);


SELECT *
FROM students as s
INNER JOIN notes as n
ON s.id = n.student_id;

SELECT *
FROM students as s
LEFT JOIN notes as n
ON s.id = n.student_id;

SELECT *
FROM students as s
RIGHT JOIN notes as n
ON s.id = n.student_id;

SELECT *
FROM students as s
FULL JOIN notes as n
ON s.id = n.student_id;