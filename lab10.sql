--Roman Bond
--308 DBM
--Dr. Rivas
--Lab10

-- PreReqsFor
create or replace function PreReqsFor(int, REFCURSOR) returns refcursor as
$$
declare
	numberIn int       := $1;
	resultset   REFCURSOR := $2;
begin
	open resultset for
		select courseNum, preReqNum
		from Prerequisites, Courses
		where num = PreReqNum
		and numberIn = courseNum;
	return resultset;
end;
$$
language plpgsql;
select PreReqsFor(308, 'results');
Fetch all from results;


--IsPreReqsFor
create or replace function IsPreReqsFor(int, REFCURSOR) returns refcursor as
$$
declare
	numberIn int       := $1;
	resultset   REFCURSOR := $2;
begin
	open resultset for
		select preReqNum, courseNum
		from Prerequisites, Courses
		where courseNum = num
		and numberIn = PreReqNum;
	return resultset;
end;
$$
language plpgsql;
select PreReqsFor(499, 'results');
Fetch all from results;
