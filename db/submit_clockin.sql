INSERT INTO timecard (user_id, clock_in )
VALUES ($1, $2)
returning *;