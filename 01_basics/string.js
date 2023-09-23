let name = `Bittu`
let repoCount = 12

console.log(`My name is ${name} and my repo is ${repoCount}.`)

const gameName = new String("Sourabh")

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLocaleLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('r'))
console.log(gameName.substring(0,5))
console.log(gameName.slice(3, 6)) // string sliced to letter u i.e. 3rd place of string sourabh and shown the output till declared ranfe i.e. 6

const str = "  sourabh Kumar   "
console.log(str);
console.log(str.trim())

const url = "https://sourabh.com/bittu%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('kumar')) // to check whether 'kumar' is available or not in url string




