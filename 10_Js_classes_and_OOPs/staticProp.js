class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName: ${this.username}`);
    }

    static createId(){ // when we use static keyword then we can't access this function from anywhere like child class etc.
        return `123`;
    }
}

const sourabh = new user('Sourabh');

// console.log(sourabh.createId());

class Teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const tcs = new Teacher("Sourabh", "sourabh@tcs.com");

(tcs.logMe());

