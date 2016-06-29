-- Database: "CHHA"

-- DROP DATABASE "CHHA";

CREATE DATABASE "CHHA"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'C'
       LC_CTYPE = 'C'
       CONNECTION LIMIT = -1;

COMMENT ON DATABASE "CHHA"
  IS '--' Database: "CHHA"


DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS Agents;
DROP TABLE IF EXISTS products;


-- Person --
CREATE TABLE person (
  id       char(4) not null,
  firstName   text not null,
  lastName    text not null,
primary key(id)
);
      -- Addresses --
      CREATE TABLE addresses (
        phoneNumber   char(10) not null,
        streetAddress text not null,
        city          text not null,
        state         text not null,
        zipCode       char(5) not null,
        primary key (phoneNumber)
      );
      -- Employees --
      CREATE TABLE employees (
        eid         char(4) not null,
        ePosition    text,
        sid         char(4) not null,
        vid         char(4) not null,
        accountNum  char(8) not null,
      primary key(eid)
      );
                -- Transportation --
                CREATE TABLE transportation (
                  vid           char(4),
                  lisensePlate  text,
                  vInsurance    int,
                primary key(vid)
                );
                -- Title --
                CREATE TABLE title (
                  eid           char(4) not null,
                  salaryAmount  int,
                  ePosition     text,
                primary key(eid)
                );
                -- Shifts --
                CREATE TABLE shifts (
                  sid         char(4),
                  shiftDay    char(2),
                  shiftMonth  char(2),
                  shiftYear   char(4),
                  shiftStart  char(4),
                  shiftEnd    char(4),
                primary key(sid)
                );
                -- EmployeePayment --
                CREATE TABLE employeePayment (
                  accountNum      char(8) not null,
                  paymentAmount   int,
                primary key(accountNum)
                );
      -- Customers --
      CREATE TABLE customers (
        cid         char(4) not null,
        hid         char(4),
        billing     char(8),
        condition   text,
      primary key(cid)
      );
                -- customerNeeds --
                CREATE TABLE customerNeeds (
                  condition     text not null,
                  medication    text,
                primary key(condition)
                );
                -- hours --
                CREATE TABLE hours (
                  hid         char(4),
                  hDay        text,
                  shiftStart  char(4),
                  shiftEnd    char(4),
                primary key(hid)
                );
                -- cPay --
                CREATE TABLE cPay (
                  billing       char(8) not null,
                  paymentAmount int not null,
                primary key(billing)
                );


-- Person --
INSERT INTO person( id, firstName, lastName )
  VALUES('p001', 'Eric', 'Lewis');
INSERT INTO person( id, firstName, lastName )
  VALUES('p002', 'Carl', 'Allen');
INSERT INTO person( id, firstName, lastName )
  VALUES('p003', 'Jennifer', 'Taylor');
INSERT INTO person( id, firstName, lastName )
  VALUES('p004', 'Peter', 'Young');
INSERT INTO person( id, firstName, lastName )
  VALUES('p005', 'Anna', 'Thomas');
INSERT INTO person( id, firstName, lastName )
  VALUES('p006', 'Gloria', 'Nelson');
INSERT INTO person( id, firstName, lastName )
  VALUES('p007', 'Jeffrey', 'Davis');
INSERT INTO person( id, firstName, lastName )
  VALUES('p008', 'Raymond', 'Gray');
INSERT INTO person( id, firstName, lastName )
  VALUES('p009', 'Arthur', 'Hernandez');
INSERT INTO person( id, firstName, lastName )
  VALUES('p010', 'Phyllis', 'Howard');


-- Addresses --
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('6107248701', '739 Forest Avenue', 'San Antonio', 'TX', '78213' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('5846403073', '821 Broad Street', 'Greenfield', 'IN', '46140' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('7498947343', '636 Canterbury Court', 'Ballston Spa', 'NY', '12020' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('8475979472', '570 Victoria Court', 'Waldorf', 'MD', '20601' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('9374849474', '878 Bank Street', 'Fernandina Beach', 'FL', '32034' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('4359573457', '443 2nd Street', 'Ashburn', 'VA', '20147' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('3460346446', '277 Cambridge Drive', 'Voorhees', 'NJ', '08043' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('9043755746', '212 State Street', 'Ballston Spa', 'NY', '12020' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('2489575836', '27 Lincoln Street', 'Fort Mill', 'SC', '29708' );
INSERT INTO Addresses( phoneNumber, streetAddress, city, state, zipCode )
  VALUES('8947524974', '658 Sycamore Lane', 'Durham', 'NC', '27703' );


-- employees --
INSERT INTO employees( eid, ePosition, sid, vid, accountNum )
  VALUES('0001', 'Nurse', '0003', '0004', '23579511' );
INSERT INTO employees( eid, ePosition, sid, vid, accountNum )
  VALUES('0002', 'Assistant', '0004', '0003', '71164851' );
INSERT INTO employees( eid, ePosition, sid, vid, accountNum )
  VALUES('0003', 'Assistant', '0002', '0001', '91294022' );
INSERT INTO employees( eid, ePosition, sid, vid, accountNum )
  VALUES('0004', 'Nurse', '0005', '0005', '34528824' );
INSERT INTO employees( eid, ePosition, sid, vid, accountNum )
  VALUES('0005', 'Nurse', '0001', '0002', '66153737' );


-- transportation --
INSERT INTO transportation( vid, lisensePlate, vInsurance )
  VALUES( '0001', 'AJC 3040', 26311081 );
INSERT INTO transportation( vid, lisensePlate, vInsurance )
  VALUES( '0002', 'AZH 4897', 32082931 );
INSERT INTO transportation( vid, lisensePlate, vInsurance )
  VALUES( '0003', 'BFB 9343', 61635871 );
INSERT INTO transportation( vid, lisensePlate, vInsurance )
  VALUES( '0004', 'DQG 4548', 80925748 );
INSERT INTO transportation( vid, lisensePlate, vInsurance )
  VALUES( '0005', 'BZM 2874', 53347903 );


-- title --
INSERT INTO title( eid, salaryAmount, ePosition )
  VALUES( '0001', 80 , 'Nurse' );
INSERT INTO title( eid, salaryAmount, ePosition )
  VALUES( '0002', 60 , 'Assistant' );
INSERT INTO title( eid, salaryAmount, ePosition )
  VALUES( '0003', 60 , 'Assistant' );
INSERT INTO title( eid, salaryAmount, ePosition )
  VALUES( '0004', 80 , 'Nurse' );
INSERT INTO title( eid, salaryAmount, ePosition )
  VALUES( '0005', 80 , 'Nurse' );


-- Shifts --
INSERT INTO shifts( sid, shiftDay, shiftMonth, shiftYear, shiftStart, shiftEnd )
  VALUES( '0001', '01', '01', '2016', '0800', '1400' );
INSERT INTO shifts( sid, shiftDay, shiftMonth, shiftYear, shiftStart, shiftEnd )
  VALUES( '0002', '15', '02', '2016', '0600', '1000' );
INSERT INTO shifts( sid, shiftDay, shiftMonth, shiftYear, shiftStart, shiftEnd )
  VALUES( '0003', '20', '04', '2016', '0800', '1600' );
INSERT INTO shifts( sid, shiftDay, shiftMonth, shiftYear, shiftStart, shiftEnd )
  VALUES( '0004', '08', '05', '2016', '0800', '1000' );
INSERT INTO shifts( sid, shiftDay, shiftMonth, shiftYear, shiftStart, shiftEnd )
  VALUES( '0005', '10', '02', '2016', '1000', '1800' );


-- employeePayment --
INSERT INTO employeePayment( accountNum, paymentAmount )
  VALUES( '23579511', 480 );
INSERT INTO employeePayment( accountNum, paymentAmount )
  VALUES( '71164851', 240 );
INSERT INTO employeePayment( accountNum, paymentAmount )
  VALUES( '91294022', 480 );
INSERT INTO employeePayment( accountNum, paymentAmount )
  VALUES( '34528824', 160 );
INSERT INTO employeePayment( accountNum, paymentAmount )
  VALUES( '66153737', 640 );


-- customers --
INSERT INTO customers( cid, hid, billing, condition )
  VALUES( '0001', '0001', '95501713', 'alzheimers' );
INSERT INTO customers( cid, hid, billing, condition )
  VALUES( '0002', '0002', '84135330', 'parkinsons' );
INSERT INTO customers( cid, hid, billing, condition )
  VALUES( '0003', '0003', '39656322', 'alzheimers' );
INSERT INTO customers( cid, hid, billing, condition )
  VALUES( '0004', '0004', '26584723', 'alzheimers' );
INSERT INTO customers( cid, hid, billing, condition )
  VALUES( '0005', '0005', '42467045', 'parkinsons' );


-- customerNeeds --
INSERT INTO customerNeeds( condition, medication )
  VALUES( 'Alzheimers', 'Razadyne' );
INSERT INTO customerNeeds( condition, medication )
  VALUES( 'Parkinsons', 'Carbidopa' );
INSERT INTO customerNeeds( condition, medication )
  VALUES( 'Osteoporosis', 'Actonel' );


-- hours --
INSERT INTO hours( hid, hDay, shiftStart, shiftEnd )
  VALUES( '0001', 'Monday', '0800', '1400' );
INSERT INTO hours( hid, hDay, shiftStart, shiftEnd )
  VALUES( '0002', 'Tuesday', '0600', '1000' );
INSERT INTO hours( hid, hDay, shiftStart, shiftEnd )
  VALUES( '0003', 'Wednesday', '0800', '1600' );
INSERT INTO hours( hid, hDay, shiftStart, shiftEnd )
  VALUES( '0004', 'Thursday', '0800', '1000' );
INSERT INTO hours( hid, hDay, shiftStart, shiftEnd )
  VALUES( '0005', 'Friday', '1000', '1800' );

-- cPay --
INSERT INTO cPay( billing, paymentAmount )
  VALUES( '95501713', 960 );
INSERT INTO cPay( billing, paymentAmount )
  VALUES( '84135330', 480 );
INSERT INTO cPay( billing, paymentAmount )
  VALUES( '39656322', 960 );
INSERT INTO cPay( billing, paymentAmount )
  VALUES( '26584723', 320 );
INSERT INTO cPay( billing, paymentAmount )
  VALUES( '42467045', 1280 );



-- drop table 

select *
from person;

select *
from addresses;

select *
from employees;

select *
from transportation;

select *
from title;

select *
from shifts;

select *
from employeePayment;

select *
from customers;

select *
from customerNeeds;

select *
from hours;

select *
from cPay;

-- View --
CREATE VIEW employeeCustomer AS
  select eid, cid
  from shifts s, hours h
  where s.sid = h.hid
  order by cid ASC;


CREATE VIEW employeeTrans AS
  select lisensePlate, vInsurance
  from transportation t, employees e
  where t.vid = e.vid
  order by vid ASC;


-- Security Grants --
GRANT INSERT ON shifts TO assistants;

GRANT SELECT ON, UPDATE ON transportation TO nurses, assistants;


-- Total Time Query --
-- Hours to pay --
SELECT shiftStart, shiftEnd
FROM shifts
WHERE hours = shiftEnd -ShiftStart






