-- Database: "CAP2"

-- DROP DATABASE "CAP2";

CREATE DATABASE "CAP2"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'C'
       LC_CTYPE = 'C'
       CONNECTION LIMIT = -1;

COMMENT ON DATABASE "CAP2"
  IS '-- Connect to your Postgres server and set the active database to CAP2.  Then . . .'

-- Roman Bond, CMPT 308, 2/10/16, Lab 3

DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS Agents;
DROP TABLE IF EXISTS products;


-- Customers --
CREATE TABLE customers (
  cid      char(4) not null,
  name     text,
  city     text,
  discount decimal(5,2),
 primary key(cid)
);


-- Agents --
CREATE TABLE agents (
  aid     char(3) not null,
  name    text,
  city    text,
  percent real,
 primary key(aid)
);        


-- Products --
CREATE TABLE products (
  pid      char(3) not null,
  name     text,
  city     text,
  quantity integer,
  priceUSD numeric(10,2),
 primary key(pid)
);


-- Orders -- 
CREATE TABLE orders (
  ordno   integer not null,
  mon     char(3),    
  cid     char(4) not null references customers(cid),
  aid     char(3) not null references agents(aid),
  pid     char(3) not null references products(pid),
  qty     integer,
  dollars numeric(12,2),
 primary key(ordno)
);



-- SQL statements for loading example data into the CAP2 database
-- Tested on Postgres 9.3.2
-- Connect to your Postgres server and set the active database to CAP2.  Then . . .

-- Customers --
INSERT INTO Customers( cid, name, city, discount )
  VALUES(''c001'', ''Tiptop'', ''Duluth'', 10.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES(''c002'', ''Basics'', ''Dallas'', 12.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES(''c003'', ''Allied'', ''Dallas'', 8.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES(''c004'' ,''ACME'' ,''Duluth'', 8.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES(''c005'' ,''Weyland-Yutani'', ''Acheron'', 0.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES(''c006'' ,''ACME'' ,''Kyoto'' ,0.00);


-- Agents --
INSERT INTO Agents( aid, name, city, percent )
  VALUES(''a01'', ''Smith'', ''New York'', 6 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES(''a02'', ''Jones'', ''Newark'', 6 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES(''a03'', ''Brown'', ''Tokyo'', 7 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES(''a04'', ''Gray'', ''New York'' ,6 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES(''a05'', ''Otasi'', ''Duluth'', 5 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES(''a06'', ''Smith'', ''Dallas'', 5 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES(''a08'', ''Bond'', ''London'', 7 );


-- Products --
INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES(''p01'', ''comb'', ''Dallas'', 111400, 0.50 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES(''p02'', ''brush'', ''Newark'', 203000, 0.50 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES(''p03'', ''razor'', ''Duluth'', 150600, 1.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES(''p04'', ''pen'', ''Duluth'', 125300, 1.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES(''p05'', ''pencil'', ''Dallas'', 221400, 1.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES(''p06'', ''folder'',''Dallas'', 123100, 2.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES(''p07'', ''case'', ''Newark'', 100500, 1.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES(''p08'', ''clip'', ''Newark'', 200600, 1.25 );


-- Orders --
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1011, ''jan'', ''c001'', ''a01'', ''p01'', 1000, 450.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1013, ''jan'', ''c002'', ''a03'', ''p03'', 1000, 880.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1015, ''jan'', ''c003'', ''a03'', ''p05'', 1200, 1104.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1016, ''jan'', ''c006'', ''a01'', ''p01'', 1000, 500.00);
  
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1017, ''feb'', ''c001'', ''a06'', ''p03'',  600, 540.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1018, ''feb'', ''c001'', ''a03'', ''p04'',  600, 540.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1019, ''feb'', ''c001'', ''a02'', ''p02'',  400, 180.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1020, ''feb'', ''c006'', ''a03'', ''p07'',  600, 600.00);
  
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1021, ''feb'', ''c004'', ''a06'', ''p01'', 1000, 460.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1022, ''mar'', ''c001'', ''a05'', ''p06'',  400, 720.00);
    
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1023, ''mar'', ''c001'', ''a04'', ''p05'',  500, 450.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1024, ''mar'', ''c006'', ''a06'', ''p01'',  800, 400.00);
  
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1025, ''apr'', ''c001'', ''a05'', ''p07'',  800, 720.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1026, ''may'', ''c002'', ''a05'', ''p03'',  800, 740.00);


-- SQL statements for displaying example data into the CAP2 database
-- Connect to your Postgres server and set the active database to CAP2.  Then . . .

select *
from customers;

select *
from agents;

select *
from products;

-- 1
select ordno, dollars
select *
from orders;
-- 2 He said this was not wrong
select city, name
from agents
WHERE name = ''Smith'';
-- 3
select pid, name, priceUSD
from products
where quantity > 208000;
-- 4
select city, name
from agents
where city = ''Dallas'';
-- 5 This is correct
select name
from agents
-- where city not in (''New York'', ''Tokyo'')
where city != ''New York'' and city != ''Tokyo'';
-- 6
select *
from products
where (city != ''Dallas'' and city != ''Duluth'') and (priceUSD >= 1.00);
-- 7 
select *
from orders
where mon = ''jan'' or mon = ''mar'';
-- 8 
select *
from orders
where mon = ''feb'' and dollars < 500;
-- 9 
select *
from orders
where cid = ''c005'';

-- Lab 4
-- 1. Get the cities of agents booking an order for a customer whose
--    order is ''c002''

select city
from agents
where aid in (select aid
	      from orders
	      where cid = ''c002'');

-- What agenst sold pencils (''pencil'') and combs.
select name
from agents
where aid in (select aid
		from orders
		where pid in (select pid
				from products
				where name = ''pencil''))
	or 
	aid in (select aid
		from orders
		where pid in (select pid
				from products
				where name = ''comb''));

-- Returns number of rows
select count (*)
from orders

-- 
select Distinct mon
from orders
-- Puts it in alphabetical order accending
--order by mon asc
-- Puts it in alphabetical order decending
order by mon desc

-- Max
select Max(dollars)
From orders

-- Min
select Min(dollars)
From orders

select *
from orders
Order By dollars Desc

-- Sum
select Sum(dollars)
from orders

-- Average
select Avg(dollars)
from orders

-- Values greater than average
select *
from orders
where dollars > (select Avg(dollars)
		from orders);

-- 
select *
from orders
where qty > (select Avg(qty)
		from orders)
order by dollars asc;


-- Union gets rid of repitions returning a set
select city
from customers
union
select city
from agents


-- Union all will allow for repition 
select city
from customers
union all
select city
from agents

select city
from customers
union all
select city
from agents
order by city


-- Group By
-- What is the total of orders by month
select mon, sum(dollars)
from orders
--order by mon
group by mon

select city, sum(quantity)
from products
group by city

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
