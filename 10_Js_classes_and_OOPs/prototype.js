// let myName = 'Sourabh     ';

// console.log(myName.truelength);

let myHeroes = ['IronMan', 'SpiderMan'];

let heroPower = {
    ironMan: 'Rich',
    spiderMan: 'sling',

    getSpiderPower: ()=>{
        // console.log(`Spidy power is ${this.spiderMan}`);
    }
}

Object.prototype.bittu = ()=>{
    // console.log('Bittu is present in all objects.');
}

myHeroes.bittu();
// console.log(myHeroes);
// heroPower.bittu();

Array.prototype.sourabh = ()=>{

        // console.log('Sourabh is also present.');
}

myHeroes.sourabh();

//inheritance

const user = {
    username: 'Bittu',
    email: 'bittu@yahoo.in'
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TeacherAssignmentSupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user;

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = 'Node js    ';

String.prototype.trueLength = () =>{
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"Bittu".trueLength();




