select * from users
join timecard on users.id = timecard.user_id
where users.id = $1
