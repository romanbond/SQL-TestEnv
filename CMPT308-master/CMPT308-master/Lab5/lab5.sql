--- 1 Show the cities agents booking an order for a customer whose ID is c002
select a.city
from agents a 
join orders o 
on o.aid = a.aid 
and o.cid ='c002';

-- 2 Show the ids of products ordered through any agent who ordered at least one 
-- order for a Dallas customer, sorted by pid from highest to lowest.
select p.pid
from products p, orders o
join customers c
on c.cid = o.cid
where c.city = 'Dallas';

-- 3 Show the names of customers who have never placed an order. Use a sub query.
select name
from customers c
where c.cid not in    	(select cid 
			from orders);

-- 4 Show the names of customers who have never placed an order. Use outer join.
select name
from customers c
full outer join  orders o 
on c.cid = o.cid
where o.cid is null;

-- 5 Show the names of customers who placed an order through an agent in their city
-- and provide the agent's name(s)
select c.name, a.name
from agents a, customers c
where (c.cid, a.aid) in 	(select cid, aid
				from orders)
and a.city = c.city;

-- 6 Show the names of customers and agents in the same city reguardless of whether they've 
-- placed an order through them, list the city.
select c.name, a.name, c.city
from customers c, agents a
where c.city = a.city;

-- 7 Show the name and city of customers who live in they city that makes the fewest different 
-- kinds of products.
select name, city
from customers
where city in	(select city
		from products
		group by city
		order by count(city) asc
		limit 1);
