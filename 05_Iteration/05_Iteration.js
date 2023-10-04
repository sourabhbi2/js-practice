const programmingLang = ["js", "ruby", "java", "python", "cpp"]

// programmingLang.forEach(function (item){
//     console.log(item);
// })

// programmingLang.forEach((value) => {
//     console.log(value);
// })

// function printArray(item){
//     console.log(item);
// }
// programmingLang.forEach(printArray)

// programmingLang.forEach((item, index, arr) =>{
//     console.log(item, index, arr);
// })

// const myCoding = [
//     {
//     languageName: "javaScript",
//     languageFileName: "js"
// },
// {
//     languageName: "c++",
//     languageFileName: "cpp"
// },
// {
//     languageName: "python",
//     languageFileName: "py"
// }

// ]
// myCoding.forEach((item) => {
//     // console.log(item.languageName);
// })

const myNums = [1, 2, 3, 4, 5]

// const newNum = myNums.filter((num) => num > 1)
// console.log(newNum);

// const newNum = myNums.filter((num) =>{
//    return num > 1
// } )

// const newNum = []
// myNums.forEach((num) => {
//     if(num > 1){
//         newNum.push(num)
//     }
// })
// console.log(newNum);

const books = [
    {
        title: 'Book one', genre: 'Fiction', publish: 2000, edition: 2004
    },
    {
        title: 'Book two', genre: 'Non-Fiction', publish: 1985, edition: 2006
    },
    {
        title: 'Book three', genre: 'History', publish: 1989, edition: 2014
    },
    {
        title: 'Book four', genre: 'Science', publish: 1992, edition: 2009
    },
    {
        title: 'Book five', genre: 'Drama', publish: 1999, edition: 2015
    },
    {
        title: 'Book six', genre: 'Fiction', publish: 1995, edition: 2019
    },
]

let userBooks = books.filter((items) => items.genre === 'Fiction')

userBooks = books.filter((items) => {
    return items.publish <= 2000 && items.genre === 'Fiction'
})

console.log(userBooks);
