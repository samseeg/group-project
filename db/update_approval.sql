update requests
set approval = $1
where id = $2;

select * from requests