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

const myCoding = [
    {
    languageName: "javaScript",
    languageFileName: "js"
},
{
    languageName: "c++",
    languageFileName: "cpp"
},
{
    languageName: "python",
    languageFileName: "py"
}

]
myCoding.forEach((item) => {
    console.log(item.languageName);
})