// truthy value means contain true value

// const userEmail = "bittu@gmail.com"
// const userEmail = ""
const userEmail = []


// if (userEmail) {
//     console.log("Got user email");

// } else {
//     console.log("Don't have user email");
// }

/* truthy values

* "0", 'false', " ", [], {}, function(){}, 

*/


/* falsy values

* false, 0, -0, BigInt -> 0n, "", null, undefined, NaN 

*/

// if (userEmail.length === 0) {
//     console.log("Array is empty.");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty.");
}

//Nullish Coalescing Operator (??): null undefined
/* It is a logical operator that returns its right-hand side operand when its left-hand side 
operand is null and undefined and otherwise return left-hand side operand.
*/

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = null ?? undefined
console.log(val1); 

// Terniary operator

// condition ? true : false

const teaPrice = 100
teaPrice >= 80 ? console.log("less than 80") : console.log("More than 80");