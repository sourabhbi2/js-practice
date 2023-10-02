// const tinderUser = new Object(); // singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Bittu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    fullName: {
        userFullName : {
            firstName: "Sourabh",
            lastName: "Kumar"
        }
    },
    email: "sourabh@gmail.com"
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj = Object.assign({}, obj1, obj2)
// console.log(obj);

const obj = {...obj1, ...obj2}
// console.log(obj);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // returns string
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //Returns an array of key/values of the enumerable properties of an object

// console.log(tinderUser.hasOwnProperty('isLoggedOut'));

const course = {
    courseName: "Basics of JS",
    price: 1499,
    courseInstructor: "Hitesh Chaudhary"
}

const {courseInstructor: instrustor} = course

console.log(instrustor);

/*json

1. {
   "name": "Durga",
   "courseName": "Js Basics",
   "price": "Free"
}
2. [
    {},
    {}
] 
json file can be in two formats 1. in object form and 2. in array form.

*/