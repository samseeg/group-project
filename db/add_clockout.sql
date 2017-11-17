update timecard
set clock_out = $1, total_hours = $2
where id = $3;

select * from timecard