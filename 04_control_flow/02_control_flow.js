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
    console.log("Object is empty.");
}
