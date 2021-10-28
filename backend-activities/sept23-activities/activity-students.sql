CREATE TABLE students (
	id INT,
	first_name VARCHAR(200) NOT NULL,
	middle_name VARCHAR(200) NOT NULL,
	last_name VARCHAR(150)NOT NULL,
	age int NOT NULL,
	location VARCHAR(200) NOT NULL,
);

INSERT INTO students (id, first_name, middle_name, last_name, age, location) VALUES
(1, 'Efren', 'Bata', 'Reyes', 59, 'Bulacan'),
(2, 'Earl', 'D', 'Strickland', 61, 'New York'),
(3, 'Cloud', 'M', 'Strife', 25, 'Section 7'),
(4, 'Tifa', 'D', 'Lockheart', 24, 'Section 7'),
(5, 'Aerith', 'O', 'Gainsborough', 26, 'Section 5'),
(6, 'Sepiroth', 'D', 'Masamune', 31, 'Tokyo');

SELECT * FROM students;

DELETE FROM students WHERE id = 6;

SELECT COUNT(id)
FROM students;

SELECT COUNT(id)
FROM students
WHERE location = 'Manila';

SELECT AVG(age)
FROM students;

SELECT *
FROM students
ORDER BY age DESC
