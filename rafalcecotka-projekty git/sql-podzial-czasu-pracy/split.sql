CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),  
    FirstName NVARCHAR(50) NOT NULL,           
    LastName NVARCHAR(50) NOT NULL,            
);

INSERT INTO Employees(FirstName,LastName)VALUES('Piotr','Kowalski');
INSERT INTO Employees(FirstName,LastName)VALUES('Jan','Nowak');

select * from Employees;

CREATE TABLE Employees_work_est (
    EmployeeID  INT,
    Month INT CHECK (Month >= 1 AND Month <= 12) NOT NULL,           
    Planed_hours INT NOT NULL,
	CONSTRAINT FK_EmployeeID FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID) 
);

INSERT INTO Employees_work_est(EmployeeID,Month,Planed_hours)VALUES(4,1,140);
INSERT INTO Employees_work_est(EmployeeID,Month,Planed_hours)VALUES(4,2,160);
INSERT INTO Employees_work_est(EmployeeID,Month,Planed_hours)VALUES(5,1,15);

select * from Employees_work_est

CREATE TABLE time_def (
Month INT CHECK (Month >= 1 AND Month <= 12) NOT NULL,
Day INT CHECK (Day >= 1 AND Day <= 31) NOT NULL
);

select * from time_def order by Month, Day

CREATE TABLE Employees_work_time_split (
    EmployeeID  INT NOT NULL,
    Month INT CHECK (Month >= 1 AND Month <= 12) NOT NULL,           
    Day INT NOT NULL,
	Hours INT,
	CONSTRAINT FK_EmployeeID2 FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID) 
);

select * from Employees_work_time_split

-- kod do uzupe³niania tabeli time_def 
CREATE PROCEDURE create_time_def
AS

DECLARE @Counter_month INT
DECLARE @Counter_day INT
DECLARE @Counter_day_end INT

SET @Counter_month = 1

WHILE ( @Counter_month <= 12)
BEGIN
    SET @Counter_day = 1

	IF @Counter_month IN (1,3,5,7,8,10,12)
		BEGIN
			SET @Counter_day_end = 31
		END
	ELSE IF @Counter_month IN (4,6,9,11)
		BEGIN
			SET @Counter_day_end = 30
		END
	ELSE 
		BEGIN
			SET @Counter_day_end = 28
		END

    WHILE ( @Counter_day <= @Counter_day_end)
    BEGIN

		INSERT INTO time_def([Month],[Day])VALUES(@Counter_month,@Counter_day)

        SET @Counter_day = @Counter_day + 1
    END
    SET @Counter_month = @Counter_month + 1
END

-- wykonanie procedury
EXEC create_time_def;



-- podzia³ zaplanowanego czasu na dni
DECLARE @Rows_to_split INT
DECLARE @iteration INT
DECLARE @Employee INT
DECLARE @Month INT
DECLARE @Hours INT
DECLARE @Days_in_month FLOAT
DECLARE @Full_hours FLOAT
DECLARE @Rest_hours_to_split INT
DECLARE @iteration2 INT
DECLARE @to_insert INT

SET @iteration = 1
SET @Rows_to_split = (select count(1) from Employees_work_est) -- licznik ile wierszy trzeba obs³u¿yæ

WHILE (@iteration <= @Rows_to_split)
BEGIN
	SET @Employee = 
	(select
	EmployeeID 
	FROM
	(
	select 
	EmployeeID, 
	Month, 
	Planed_hours,
	ROW_NUMBER() over(order by EmployeeID asc) as rownumber 
	from 
	Employees_work_est
	) ranking
	where rownumber = @iteration)

	SET @Month = 
	(select
	Month 
	FROM
	(
	select 
	EmployeeID, 
	Month, 
	Planed_hours,
	ROW_NUMBER() over(order by EmployeeID asc) as rownumber 
	from 
	Employees_work_est
	) ranking
	where rownumber = @iteration)

	SET @Hours = 
	(select
	Planed_hours
	FROM
	(
	select 
	EmployeeID, 
	Month, 
	Planed_hours,
	ROW_NUMBER() over(order by EmployeeID asc) as rownumber 
	from 
	Employees_work_est
	) ranking
	where rownumber = @iteration)
	-- dla ka¿dej linii loop przez pracownika miesi¹c i rozdzielamy
	SET @Days_in_month = (select count (1) from time_def where Month = @Month)
	SET @Full_hours = FLOOR(@Hours / @Days_in_month)
	SET @Rest_hours_to_split = @Hours - (@Full_hours * @Days_in_month)
	SET @iteration2 = 1

	WHILE (@iteration2 <= @Days_in_month)
	BEGIN
	IF @iteration2 <= @Rest_hours_to_split
	BEGIN
	SET @to_insert = @Full_hours + 1
	END
	ELSE
	BEGIN
	SET @to_insert = @Full_hours
	END
	 INSERT INTO [Employees_work_time_split]
           ([EmployeeID]
           ,[Month]
           ,[Day]
           ,[Hours])
     VALUES
           (@Employee
           ,@Month
           ,@iteration2
           ,@to_insert)
	SET @iteration2 = @iteration2 + 1
	END
	SET @iteration = @iteration + 1
END


-- weryfikacja poprawnoœci dzia³ania
select 'work est' as src, Employees_work_est.* from Employees_work_est --order by EmployeeID, Month
UNION ALL
select 'work split' as src, EmployeeID, Month, sum(Hours) Planed_hours from Employees_work_time_split 
group by EmployeeID, Month --order by EmployeeID, Month


select * from Employees_work_time_split

