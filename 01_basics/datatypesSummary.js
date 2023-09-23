/* 
Primitive datatypes - 7 types mainly : String, Number, Boolean, null, undefined, Symbol, BigInt

 
 Reference (non-premitive) - Array, Objects, Functions

 */
const id = Symbol(123)
const another_Id = Symbol(123)
console.log(id === another_Id)
console.log(typeof another_Id)

//array, object

const heros = [{name:"IronMan",
 name2:"Shaktiman", name3:"Naagraj"}]
 console.log(typeof heros);


 //====================================

// Stack memory -> In which  Premitive datatypes stored 
//Heap memory -> In which  non-premitive datatypes stored