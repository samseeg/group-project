select * from users
join requests on users.id = requests.user_id
order by requests.id desc