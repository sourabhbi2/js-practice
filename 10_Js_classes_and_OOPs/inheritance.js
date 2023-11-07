class user{
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends user{
    constructor(username, email, password){
        super(username); // it is used to access properties of class's prototype i.e user to invoke the superclass's constructor.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}

const bittu = new Teacher('Bittu', 'bittu@gmail.com', 123);

bittu.addCourse();
bittu.logMe();

console.log(bittu instanceof Teacher); // instanceof operator is used to check the prototype property of a constructor appears anywhere in the prototype chain of an object.