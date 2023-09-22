const emp_Id = 101
let emp_Email = "john@gmail.com"
var emp_Password = 12121212
emp_City = "Lucknow"

//emp_Id  = 102 //not allowed to re-assigned a value to const variable 

emp_Email = "johnDear@gmail.com"
emp_Password = 13131313
emp_City = "Delhi"

/*
Perefer not use to var 
because of issue in block scope and functional scope
*/

console.log(emp_Id)
console.table([emp_Id, emp_Email, emp_Password, emp_City])

