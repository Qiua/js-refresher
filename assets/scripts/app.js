// import * as util from "./util.js";
// import { apiKey1 as api } from "./util.js";

// console.log("API Key:", util.default);
// console.log("API Key 1:", api);

let apiKey1 = ('b' + 'a' + + 'a' + 'a').toLowerCase(); //mutable
const apiKey = ('b' + 'a' + + 'a' + 'a').toUpperCase(); //read only

console.log(`${apiKey1}`); // "banana"
console.log(apiKey); // "BANANA"