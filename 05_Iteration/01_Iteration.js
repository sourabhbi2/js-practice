//for

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number.");
    }
    // console.log(element)
}

for (let i = 1; i <= 5 ; i++ ) {
    // console.log(`\nOuter loop value:${i} \n`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}
    
let myArr = ["SpiderMan", "IronMan", "BatMan"]
// console.log(myArr.length);
for(let i = 0; i < myArr.length; i ++){
    const element = myArr[i]
    // console.log(element);
}


//break and continue

// for(let i = 1; i <= 10; i++){
//     if(i == 5){
//         console.log('Detected 5');
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

for(let i = 1; i <= 10; i++){
    if(i == 5){
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of i is ${i}`);
}