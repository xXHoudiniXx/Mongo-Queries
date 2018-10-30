Q2: Select the first 10 employees (ordered by employee number) and show 
employee number, first name, last name, and current salary from our company.

HINTS:

There are multiple salaries recorded for each employee in the salary table... 
How can you pick just one from it? You can use the javascript value for 'new Date()' 
to return the current date/time. Mongodb 3.2 has a new alternative way to do 
this and significantly improve performance - 5 bonus points for anyone who can 
show the use of a new Mongodb 3.2 method without using $unwind. Because you don't 
have Mongodb 3.2, you will likely have to write this pipeline without testing it.
*/
//------------------------------------------------------------------------
db.employees.aggregate([
{   $unwind: "$salaries"},
{   $sort: {emp_no: 1, "salaries.to_date": 1}},
//{   $group: {_id: "$emp_no", currentSalary: {$first: "$salaries.to_date"}}},
{   $project: {emp_no: 1, first_name: 1, last_name: 1, salaries: 1}},
{   $limit: 10}
]).pretty()
