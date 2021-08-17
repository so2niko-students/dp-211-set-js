//Arrays
//Object
const nums = new Array(8);
console.log(nums);
nums[8] = 9;
//Literal
const planets = ['Mercury', 'Venera', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uran', 'Neptun', 'Pluton'];

let apples = 3;
let bananas = apples;
bananas += 3;
console.log(apples, bananas);

// const games = planets.slice();
// const games = [].concat(planets);
const games = [...planets];

games.unshift('Andromeda');
console.log(planets,games);
console.log(planets == games);


const users = [['Nick', 'Dnipro'], ['Maksim', 'Dnipro'], ['Ann', 'Dnipro'], ['vladimir', 'Dnipro'], ['Vladislav', 'Nikollaiev'], ['Max', 'Dnipro'], ['Daria', 'Kyiv']];

const newUsers = JSON.parse(JSON.stringify(users));

newUsers[0][1] = 'Lviv';

console.log(users, newUsers);
console.log(users[0] == newUsers[0]);




