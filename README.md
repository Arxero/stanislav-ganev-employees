# Employees

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Description
A couple of employees who have worked in a team for the longest time.

## Data:
A text file is given in the format:
  * EmpID, ProjectID, DateFrom, DateTo

Example data:
```
143, 12, 2013-11-01, 2014-01-05
218, 10, 2012-05-16, NULL
143, 10, 2009-01-01, 2011-04-27
151, 10, 2010-01-01, 2010-01-27
150, 10, 2010-01-01, 2011-01-01
```

## Mandatory requirements:
1) Write an application that finds the pair of employees that worked longest time together on common projects.
2) DateTo also accepts a value of "NULL" (which is equivalent to "today").
3) The data can be submitted to the program from a text file
4) The program can to run without the need to do any
changes in the code, ie after "checking" the code and importing it into the IDE
5) Make a UI where the user can select a file from the file
system and after selecting the file to see the result in "datagrid" with the following
columns Employee ID # 1, Employee ID # 2, Project ID, Days worked.
6) Comply with the "code convention", depending on the language in which it is developed
the program:
 * a. See here (https://en.wikipedia.org/wiki/Coding_conventions)
7) Solution of the problem put in github:
* a. Repository Name to be "FirstName-LastName-employees (ie ivan-ivanov-
employess)

## Bonus requirements:
1) The program can run and show the result in the console.
2) To support more than one or all (for "all" we give many points)
date formats.

