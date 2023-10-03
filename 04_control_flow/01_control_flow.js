// if statement

// if (2 == '2') {
//     console.log('executed');
// } else{
//     console.log('not executed');
// }

// if (2 === '2') { // === checking strictly 
//     console.log('executed');
// } else{
//     console.log('not executed');
// }

const balance = 1500

// if(balance < 500){
//     console.log("Balance is less than 500");
// } else if(balance < 750){
//     console.log("Balance is less than 750.");
// } else{
//     console.log("Less than 1500");
// }

// if(balance < 500) console.log("Balance is less than 500");
//  else if(balance < 750) console.log("Balance is less than 750.");
//  else console.log("Less than 1500");

//  if(balance < 500) console.log("Balance is less than 500");
//  if(balance < 750) console.log("Balance is less than 750.");
//    console.log("Less than 1500");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("Allow to purchase.");
} 
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}