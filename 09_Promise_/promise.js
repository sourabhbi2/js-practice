const promiseOne = new Promise((resolve, reject) =>{
    //do an async task
    // db calls, cryptography, network

    setTimeout(() =>{
        console.log('Async task is completed.');

        //we have to pass resolve() to connect promise consumed.
        resolve();
    }, 1000)
})

promiseOne.then(()=>{
    // console.log('Promise consumed');
})

// another way to call resolve function

new Promise((resolve, reject) =>{
        setTimeout(()=>{
            // console.log('Async task 2');
        }, 1000)
}).then(()=>{
    // console.log('Async 2 resolved.');
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: 'Sourabh', email: 'sourabh@gmail.com'})

    }, 1000)

})

promiseThree.then((a)=>{
    // console.log(a);
})

//callback hell

const promiseFour = new Promise((resolve, reject) =>{
    setTimeout(()=>{

        let error = false;
        if(!error){
            resolve({username:'Bittu', city:'Patna'})
        }else{
            reject('ERROR: Something went wrong')
        }

    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;

}).then((user)=>{
    console.log(user);
}).catch((err)=>{
    console.log(err);
}).finally(() => console.log('Promise is either resolved or rejected.'));

//async n await

// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:'Sourabh', city:'Pune'})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//    try{
//     const response = await promiseFive
//     console.log(response);
//    } catch(err){

//         console.log(err);
//    }
// }
// consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();
//writing same function by using then()

fetch('https://api.github.com/users/sourabhbi2')
.then((response)=>{

    return response.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})









