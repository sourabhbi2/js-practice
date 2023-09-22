let score = "Bittu"
let valueInNumber = Number(score)
console.log(typeof valueInNumber)

let anyNumber = 24

let stringNumber = String(anyNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//concatination 

let str1 = "Hello"
let str2 = " Bittu"
console.log(str1 + str2)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2);
console.log(1 + 2 + "2")

console.log(+"") //empty parentheses converted  to zero '0' value

//increment operation

//postfix increment
let a = 4
let b = a++
console.log("a: ", a, "b: ", b) // in postfix increment, returns the value before incrementing 

//prefix increment
let x = 2n
let y = ++x
console.log("X = ", x, ";" , "Y = ", y); // it returns the value after incrementing
