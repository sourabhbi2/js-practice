const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Aquaman", "Flash", "Superman"]

marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes  = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // ... -> three dot used to spread an array
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], [7, 8], [9, 10] ]
const real_another_array = another_array.flat(Infinity) // this method used to merge all sub array into one array
// console.log(real_another_array);

// console.log(Array.isArray("Bittu")) // return array or not
// console.log(Array.from("Bittu")); // convert into array
// console.log(Array.from({name: "Bittu"})); // returns empty[], can't identify

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



