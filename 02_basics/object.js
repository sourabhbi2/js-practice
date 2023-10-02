// singleton -> we can create only one instance of class i.e constructor and can be accessed globally.
// in other words we can create singleton only through constructor.
// eg- Object.create -> i.e constructor singleton

//object literals


const mykey = Symbol("key1")

const JsUser = {
    name: "Bittu",
    age: 22,
    [mykey] : "mykey1", // we can define Symbol in '[]'
    location: "Patna",
    email: "bittu123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "sourabh123@gmail.com" // we can update the email through this
// Object.freeze(JsUser) // freeze the obj, can't be make any changes
// JsUser.email = "Bittu123@gmail.com"
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mykey]); // can access in '[]' without ""
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user this is  ${this.name}`); // using backtic "`" we can manupulate strings.
    
}

console.log(JsUser.greeting());
