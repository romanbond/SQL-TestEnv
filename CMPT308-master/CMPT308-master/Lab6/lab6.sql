-- Lab6
--  1  Display the name and city of the customers who live in any city that makes the most different
--     kinds of products. Return the NAME and CITY of both.
select c.name, c.city 
from customers c
where c.city = (select p.city 
		from products p
		group by p.city 
		order by count(p.city) desc limit 1);

--  2  Display the names of the products whose priceUSD is strickly above the average priceUSD,
--     in reverse alphabetical order.
select p.name
from products p
where p.priceUSD > (select avg(p.priceUSD) 
		    from products p)
order by p.name desc;

--  3  Display the customer name, pid ordered, and the total for all orders, sorted by total from
--     high to low.
select c.name, o.pid, o.dollars 
from orders o
inner join customers c 
on o.cid = c.cid
order by o.dollars desc;

--  4  Display all the customer names in alphabetical order and their total ordered. Use coalesce
--     to avoid showing NULLS.
-- YOU MISSED A SEMICOLON HERE!!!
select c.name, sum(o.dollars)
from customers c
left join orders o
on c.cid = o.cid
group by o.cid, c.name
order by c.name;

--  5  Display the names of all customers who bought product from agents based in Tokyo along with
--     the names of the products they ordered and the names of agentswho sold it to them.
select c.name, a.name, p.name 
from orders o 
inner join agents a 
	on o.aid = a.aid
inner join customers c 
	on o.cid = c.cid  
inner join products p 
	on o.pid = p.pid 
where o.aid in (select a.aid from agents a where a.city = 'Tokyo');

--  6  Write a query to check te accuracy of the dollars column in the Orders table. This means
--     calculating  Orders.totalUSD from Data in other tables and comparing those values to the 
--     values in Orders.totalUSD. Display all rows in Orders where Orders.totalUSD is incorrect.
select dollars, o.qty*p.priceusd*(1-(discount/100)) as truetotal
from orders o
inner join products p on o.pid = p.pid
inner join customers c on o.cid = c.cid
where dollars not in (select o.qty*p.priceusd*(1-(discount/100)) as truetotal
			from orders o
			inner join products p on o.pid = p.pid
			inner join customers c on o.cid = c.cid);

--  7  What is the difference between a LEFT OUTER JOING and a RIGHT OUTER JOIN? Give example
--     queries in SQL to demonstrate. 

-- The left outer join would be the first table that you display in your output. The right outer 
-- join would be the last table on the end of the out put. 
