// import * as util from "./util.js";
// import { apiKey1 as api } from "./util.js";

// console.log("API Key:", util.default);
// console.log("API Key 1:", api);

// let apiKey1 = ('b' + 'a' + + 'a' + 'a').toLowerCase(); //mutable
// const apiKey = ('b' + 'a' + + 'a' + 'a').toUpperCase(); //read only

// console.log(`${apiKey1}`); // "banana"
// console.log(apiKey); // "BANANA"


// Functions

// function getRandomInt(min, max, fixed = false) {
//     if (fixed) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//     }
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomInt = getRandomInt(1, 9999, true); // Example usage: generates a random integer between 1 and 10
// console.log(randomInt); // Example usage: generates a random integer between 1 and 10

// Arrow Functions
const add = (a, b) => a + b;
const sub = (a, b) => { return a - b; };
const mirror = a => a;
const object = (a, b) => ({ a: a, b: b });

console.log(mirror("c"));
console.log(object("1", "2").b);