const user = {
    userName: "Bittu",
    price: 9999,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website.`); //this keyword used for current context
        console.log(this);
    }
}
// user.welcomeMessage()
// user.userName = "Sourabh"
// user.welcomeMessage()

// console.log(this);


// const demo = function (){
//     console.log(this);
// }
// demo()
const demo = () => {
    let username = "Bittu"
    // console.log(this.username); //this is not working in function while in object it is working
    console.log(this);
}
// demo()

// const addNumbers = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addNumbers(5,5)); 

// const addNumbers = (num1, num2) =>  num1 + num2 // if single line code then we can do it like this

// console.log(addNumbers(5,5)); 

// const addNumbers = (num1, num2) =>  (num1 + num2) // if single line code then we can do it like this only using ()

// console.log(addNumbers(5,5)); 

const addNumbers = (num1, num2) => ({ username: " Bittu" }) // we can declare object within () by using {}

console.log(addNumbers(5, 5));


