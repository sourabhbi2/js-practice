function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 5;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    // this.username = username; // this keyword using for corrent context.
    createUser.username = username;
    createUser.score = score;
}

createUser.prototype.increment = ()=>{
    createUser.score++;
}

createUser.prototype.printMe = ()=>{
    console.log(`Price of ${createUser.username} ${createUser.score}`);
}

const chai = new createUser('chai', 20);
const tea = new createUser('Tea', 30)

chai.printMe()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

1) Anew object is created: The new keyword initiates the creation of a new JS object.

2) A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3) 

*/