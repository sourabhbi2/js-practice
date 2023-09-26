// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); // returns a string to date formate
// console.log(myDate.toDateString()); // returns a date 
// console.log(myDate.toLocaleString()); // returns date n time 

let myNewDate = new Date(2023, 0, 26)
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());

let myNewDate1 = new Date("1-1-2023")
// console.log(myNewDate1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // returns number of millisecond
// console.log(Math.floor(Date.now()/1000));

let newDate2 = new Date()
console.log(newDate2);
console.log(newDate2.getMonth() +1);
console.log(newDate2.getDay());
console.log(newDate2.toLocaleString('default', {
    weekday: "long",
    // dateStyle: "full"
}));