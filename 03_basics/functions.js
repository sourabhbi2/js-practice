function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result 
    return num1 + num2
}
const result = addTwoNumbers(4,5)

// console.log("Result is ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Bittu"))
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
return val1, val2, num1
}

// console.log(calculateCartPrice(100, 200, 300));
// console.log(calculateCartPrice(100, 200, 300, 400, 500)); // console only spread array, first two value stored in val1 n val2

const user = {
    userName: "Sourabh",
    price: 199
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`);
}
handleObj(user)