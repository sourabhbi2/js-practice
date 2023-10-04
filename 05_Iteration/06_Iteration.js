const mynums = [1, 2, 3, 4, 5]

// const newNums = mynums.map((num) => {
//      num + 10
// })

//chaining using map

// const newNums = mynums
// .map((num) => num * 10)
// .map((num) => num + 1)
// console.log(newNums);

//.reduce

// const myTotal = mynums.reduce(function (acc, currentVal){
//     console.log(`acc: ${acc} and currentVal: ${currentVal}`);
//     return acc + currentVal
// }, 3 )

const myTotal = mynums.reduce((acc, currentVal) => {
    return acc + currentVal
}, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "py course",
        price: 5999
    },
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "react-js course",
        price: 2999
    }

]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);