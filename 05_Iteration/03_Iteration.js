// for-of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hellow there...!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}

//Maps -> It is a object which holds key-value pairs like user declared object.

const map = new Map()
map.set('IN', 'India')
map.set('SA', 'South Africa')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const ObjGame = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of ObjGame) {
//     console.log(key, ':-', value); // object can't be iterable in this loop.
    
// }


