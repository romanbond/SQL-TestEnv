-- Roman Bond, CMPT 308, 2/10/16, Lab 3

-- 1
select ordno, dollars
select *
from orders;
-- 2
select city, name
from agents
WHERE name = 'Smith';
-- 3
select pid, name, priceUSD
from products
where quantity > 208000;
-- 4
select city, name
from agents
where city = 'Dallas';
-- 5
select name
from agents
where city != 'New York' and city != 'Tokyo';
-- 6
select *
from products
where (city != 'Dallas' and city != 'Duluth') and (priceUSD >= 1.00);
-- 7 
select *
from orders
where mon = 'jan' or mon = 'mar';
-- 8 
select *
from orders
where mon = 'feb' and dollars < 500;
-- 9 
select *
from orders
where cid = 'c005';
