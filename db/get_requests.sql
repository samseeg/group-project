select * from users
join requests on users.id = requests.user_id
where users.id = $1
order by requests.id desc