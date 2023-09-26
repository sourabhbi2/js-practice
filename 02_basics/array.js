const myArr = [1, 2, 3, 4]
const heroes = ["IronMan", "Shaktiman"]

// console.log(myArr[0]);

//array methods

//  myArr.push(5)
// myArr.push(6) // added the value at end of an array
// myArr.pop() // remove the value from end of an array

// myArr.unshift(0) // its work as push but added the value at first of an array
// myArr.shift() // works like pop but remove the value from the first place of an array

// console.log(myArr.includes(6)); // to know whether data is availble or not in the array
// console.log(myArr);

const newArr = myArr.join() // join() convert it to string
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
console.log("A: ", myArr);
 
const newArr1 = myArr.slice(1, 3) // slice() returns a selected elements in an array
 
 console.log(newArr1)
 console.log("B: ", myArr);


 const newArr2 = myArr.splice(1, 3) // splice() returns the removed elements in an array which means manupulate original array
 console.log(newArr2);
 console.log("C:", myArr);
  