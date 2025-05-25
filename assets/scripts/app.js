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
// const add = (a, b) => a + b;
// const sub = (a, b) => { return a - b; };
// const mirror = a => a;
// const object = (a, b) => ({ a: a, b: b });

// console.log(mirror("c"));
// console.log(object("1", "2").b);

// // Objects
// const person = {
//     name: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA"
//     },
//     fullName() {
//         return `${this.name} ${this.lastName}`;
//     }
// };
// // const { name: personName, age, address: { city, country } } = person;

// console.log(person.fullName()); // John

// //Class Object Blueprint
// class Person {
//     constructor(name, lastName, age) {
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     fullName() {
//         return `${this.name} ${this.lastName}`;
//     }

//     greet() {
//         return `Hello, my name is ${this.fullName()} and I am ${this.age} years old.`;
//     }
// }
// const person1 = new Person("Jane", "Doe", 25);
// const person2 = new Person("Alice", "Smith", 28);
// console.log(person1.fullName()); // Jane Doe
// console.log(person2.greet()); // Alice Smith

// //Arrays
// const fruits = ["apple", "banana", "cherry"]; // Array of strings
// const numbers = [1, 2, 3, 4, 5]; // Array of numbers
// const arrayWithMixedTypes = [1, "two", true, null, { key: "value" }, [1, 2, 3]]; // Array with mixed types

// const arrayWithSpread = [...fruits, ...numbers]; // Array with spread operator
// const arrayWithConcat = fruits.concat(arrayWithMixedTypes); // Array with concat method
// const arrayWithMap = numbers.map(num => num * 2); // Array with map method
// const arrayWithFilter = numbers.filter(num => num > 2); // Array with filter method

// // console.log(arrayWithConcat);
// // arrayWithMap.forEach(num => console.log(num)); // 2, 4, 6, 8, 10
// // console.log(arrayWithFilter); // [3, 4, 5]
// // console.log(arrayWithSpread); // ["apple", "banana", "cherry", 1, 2, 3, 4, 5]

// const index = fruits.findIndex((fruit) => {
//     return fruit === "cherry";

// }); // 1
// console.log(index);

// const arrayMapExample = fruits.map((fruit) => {
//     return fruit + " is " + fruit;
// });

// console.log(arrayMapExample); // ["appleapple", "bananabanana", "cherrycherry"]

// const arrayToObject = fruits.reduce((acc, fruit) => {
//     acc[fruit] = fruit.length;
//     return acc;
// }, {});
// console.log(arrayToObject); // { apple: 5, banana: 6, cherry: 6 }


// const arrayNumbers = [1, 2, 3, 4, 5];
// function transformToObjects(numberArray) {
//     return numberArray.map((item) => ({ val: item }))
// }

// const transformedArray = transformToObjects(arrayNumbers);
// console.log(transformedArray); // ["val:1", "val:2", "val:3", "val:4", "val:5"]

// // Destructuring arrays and objects
// const array = [1, 2, 3, 4, 5];
// const [first, second] = array;
// console.log(second); // 1

// const object = { a: "Andrey", b: "Aires", c: 38 };
// const { a: firstName, b: lastName, c: age } = object;
// console.log(`${firstName} ${lastName}, ${age} anos de idade.`); // 1

// function greet({ a, c }) {
//     return `Hello, my name is ${a} and I am ${c} years old.`;
// }

// console.log(greet(object));

// // Spread Operator
// const array1 = [1, 2, 3, 3.11];
// const array2 = [4, 5, 6, { a: "a" }];
// const array3 = [[1, 2], [3, 4]];
// const combinedArray = [...array1, ...array2, ...array3[0], ...array3[1]];
// console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// const object1 = { user: "Andrey", email: "andrey@email.com" };
// const object2 = { isAdmin: false, isUser: true };
// const combinedObject = { ...object1, ...object2 };
// console.log(combinedObject); //{user: 'Andrey', email: 'andrey@email.com', isAdmin: false, isUser: true}

// // For of loop
// const array = [1, 2, 3, 4, 5];
// for (const item of array) {
//     console.log(item); // 1, 2, 3, 4, 5
// }

// For in loop
const object = { a: "Andrey", b: "Aires", c: 38 };
for (const key in object) {
    console.log(`${key}: ${object[key]}`); // a: Andrey, b: Aires, c: 38
}
// For each loop
const array = [1, 2, 3, 4, 5];
array.forEach((item, index) => {
    console.log(`Index: ${index}, Item: ${item}`); // Index: 0, Item: 1, Index: 1, Item: 2, ...
});
