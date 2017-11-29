select * from users
join timecard on users.id = timecard.user_id
where users.user_name = $1
order by timecard.id desc
