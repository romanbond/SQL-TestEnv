-- Database: "CAP2"

-- DROP DATABASE "CAP2";

CREATE DATABASE "CAP2"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'English_United States.1252'
       LC_CTYPE = 'English_United States.1252'
       CONNECTION LIMIT = -1;

----------------------------------------------------------------------------------------
-- Postgres create, load, and query script for CAP2.
--
-- SQL statements for the CAP2 database
-- 
-- Derived from the CAP examples in _Database Principles, Programming, and Performance_, 
--   Second Edition by Patrick O'Neil and Elizabeth O'Neil
-- 
-- Modified by Pablo Rivas from an earlier edition of Alan G. Labouseur
-- 
-- Tested on Postgres 9.3.2    (For earlier versions, you may need
--   to remove the "if exists" clause from the DROP TABLE commands.)
----------------------------------------------------------------------------------------

-- Connect to your Postgres server and set the active database to CAP2.  Then . . .

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
  VALUES('c001', 'Tiptop', 'Duluth', 10.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES('c002', 'Basics', 'Dallas', 12.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES('c003', 'Allied', 'Dallas', 8.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES('c004' ,'ACME' ,'Duluth', 8.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES('c005' ,'Weyland-Yutani', 'Acheron', 0.00);

INSERT INTO Customers( cid, name, city, discount )
  VALUES('c006' ,'ACME' ,'Kyoto' ,0.00);


-- Agents --
INSERT INTO Agents( aid, name, city, percent )
  VALUES('a01', 'Smith', 'New York', 6 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES('a02', 'Jones', 'Newark', 6 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES('a03', 'Brown', 'Tokyo', 7 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES('a04', 'Gray', 'New York' ,6 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES('a05', 'Otasi', 'Duluth', 5 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES('a06', 'Smith', 'Dallas', 5 );

INSERT INTO Agents( aid, name, city, percent )
  VALUES('a08', 'Bond', 'London', 7 );


-- Products --
INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES('p01', 'comb', 'Dallas', 111400, 0.50 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES('p02', 'brush', 'Newark', 203000, 0.50 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES('p03', 'razor', 'Duluth', 150600, 1.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES('p04', 'pen', 'Duluth', 125300, 1.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES('p05', 'pencil', 'Dallas', 221400, 1.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES('p06', 'folder','Dallas', 123100, 2.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES('p07', 'case', 'Newark', 100500, 1.00 );

INSERT INTO Products( pid, name, city, quantity, priceUSD )
  VALUES('p08', 'clip', 'Newark', 200600, 1.25 );


-- Orders --
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1011, 'jan', 'c001', 'a01', 'p01', 1000, 450.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1013, 'jan', 'c002', 'a03', 'p03', 1000, 880.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1015, 'jan', 'c003', 'a03', 'p05', 1200, 1104.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1016, 'jan', 'c006', 'a01', 'p01', 1000, 500.00);
  
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1017, 'feb', 'c001', 'a06', 'p03',  600, 540.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1018, 'feb', 'c001', 'a03', 'p04',  600, 540.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1019, 'feb', 'c001', 'a02', 'p02',  400, 180.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1020, 'feb', 'c006', 'a03', 'p07',  600, 600.00);
  
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1021, 'feb', 'c004', 'a06', 'p01', 1000, 460.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1022, 'mar', 'c001', 'a05', 'p06',  400, 720.00);
    
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1023, 'mar', 'c001', 'a04', 'p05',  500, 450.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1024, 'mar', 'c006', 'a06', 'p01',  800, 400.00);
  
INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1025, 'apr', 'c001', 'a05', 'p07',  800, 720.00);

INSERT INTO Orders( ordno, mon, cid, aid, pid, qty, dollars )
  VALUES(1026, 'may', 'c002', 'a05', 'p03',  800, 740.00);


-- SQL statements for displaying example data into the CAP2 database
-- Connect to your Postgres server and set the active database to CAP2.  Then . . .

select *
from customers;

select *
from agents;

select *
from products;

select *
from orders;


-- Lab

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
select c.name, sum(o.dollars)
from customers c
left join orders o
on c.cid = o.cid
group by o.cid, c.name
order by c.name

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