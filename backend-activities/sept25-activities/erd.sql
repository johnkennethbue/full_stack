-- Activity #1 (Unique inventory rented)
SELECT count(DISTINCT film_id)
FROM rental AS r
LEFT JOIN inventory AS i
ON r.inventory_id = i.inventory_id

-- Activity #1.1(total number inventory rented)
SELECT count(*) FROM rental;

-- Activity #2(List all movies by Dan Torn and Dan Streep)
SELECT f.film_id, f.title, a.actor_id, a.first_name, a.last_name
FROM film AS f
LEFT JOIN film_actor AS a_id
ON f.film_id = a_id.film_id
LEFT JOIN actor AS a
ON a_id.actor_id = a.actor_id
WHERE a.first_name='Dan' AND (a.last_name='Torn' OR a.last_name='Streep')
ORDER BY f.title

-- Activity #3(List all comedy films of all actors that starts with 'D')
SELECT f.title, cat."name", CONCAT(a.last_name, ', ', a.first_name) AS actor_full_name
FROM film AS f
LEFT JOIN film_actor AS a_id
ON f.film_id = a_id.film_id
LEFT JOIN actor AS a
ON a_id.actor_id = a.actor_id
LEFT JOIN film_category AS f_cat
ON f.film_id = f_cat.film_id
LEFT JOIN category AS cat

ON f_cat.category_id = cat.category_id
WHERE
	cat.name = 'Comedy' AND
	a.last_name LIKE 'D%'
ORDER BY actor_full_name