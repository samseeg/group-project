update requests
set approval = $1
where user_id = $2;

select * from requests