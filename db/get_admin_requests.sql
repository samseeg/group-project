select * from users
join requests on users.id = requests.user_id
where approval is null
order by requests.id desc