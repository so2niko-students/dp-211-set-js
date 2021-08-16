// var a = 3, b = 4;

let a = 3;
let b = 4;

const people = ['Ann', 'Vladimir', 'Maksim', 'Max', 'Daria', 'Vladislav'];

people.unshift('Nick');

// console.log(people);

//Mutable
const obj = {};
const arr = [];

//Non Mutable
const num = 1;//NaN, Infinity, -Infinity
const str = 'Hello';
const isTrue = true;
const und = undefined;
const fullNull = null;
const bigData = 123n;
const link1 = Symbol('link1');

// const randomNum = parseInt(Math.random() * 7);
// const randomNum = Math.floor(Math.random() * 7);
// const randomNum = Math.trunc(Math.random() * 7);
// const randomNum = ~~(Math.random() * 7);
// const randomNum = (Math.random() * 7).toFixed(0);
// const randomNum = +(Math.random() * 7).toString().split('.')[0];
// const randomNum = (Math.random() * 7).toString().match(/\d/);
// const randomNum = (Math.random() * 7) >> 0;
// const randomNum = (Math.random() * 7) | 0;

const r = Math.random() * 7;
const randomNum = r - r % 1;

// console.log(people[randomNum]);
// console.log(randomNum);

//Strings

let myName = 'Nick';
// myName[1] = '2'; //только для чтения

// console.log(myName[1]);
// console.log(myName.substr(2, 1));
// console.log(myName.substring(-1, 3));
// console.log(myName.slice(-3, -2));
//substr
//substring
//slice





