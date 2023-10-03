
let a = 300; // global scope

if(true){
    let a = 10; // block scope
    const b = 20;
    // console.log('Inner a:', a);
    
}

// console.log(a)
// console.log(b)
// console.log(c)

console.log(addOne(9))
function addOne(num){
    return num + 1
}


// console.log(addTwo(6)) cannot access before initialization bcoz it is a expression function
const addTwo = function (num){
    return num + 1
}
console.log(addTwo(6))
