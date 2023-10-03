// Immediately Invoked Function Expression (IIFE)

// this type of fuction used for immediately invoking
 
(function demo() {
    // named IIFE
    console.log('DB CONNECTED');
})();

//  (function demo1(){
//     console.log('DB CONNECTED 2');
//  })()

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})("Bittu")