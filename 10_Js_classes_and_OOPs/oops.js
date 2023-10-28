//Object literals example

const user = {
    username: "Bittu",
    city: 'Patna',
    email: 'bittu@gmail.com',

    getUserDetails: ()=>{
        // console.log("Got user details from DB.");
        // console.log(`UserName: ${user.username}` );
        // console.log(user);
    }
}

// console.log(user.getUserDetails());
// console.log(user.username);


function User(username, city, email){
    this.username = username; //this.username is a variable and username is an argument.
    this.city = city;
    this.email = email;

    return this; //it will return implicitly  but i use this for verbose reason.
} 
const userOne = new User('Sourabh', 'Pune', 'sourabh@yahoo.in'); // new keyword is used for separate instance, it will help to protect from override the data.

const userTwo = new User("Bhagya", "Mulshi", "bhagya@gmail.com");

console.log(userOne);
console.log(userTwo);














