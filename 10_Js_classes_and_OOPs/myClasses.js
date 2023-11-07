// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     //for encrypting the password
//     encryptPassword(){
//         return `${this.password}abc#`;

//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const bittu = new user("Bittu", 'bittu@gmail.com', 123);

// console.log(bittu.encryptPassword());
// console.log(bittu.changeUserName());

//behind the scene

function user(username, email, password){

    this.username = username;
    this.email = email;
    this.password = password;
    
}

user.prototype.encryptPassword = ()=>{
    return `${this.password}#abc`
}

user.prototype.changeUserName = ()=>{
    return `${this.username.toUpperCase()}`;
}

const sourabh = new user("Sourabh", "sourabh@gmail.com", 123);

console.log(sourabh.encryptPassword());
console.log(sourabh.changeUserName());






