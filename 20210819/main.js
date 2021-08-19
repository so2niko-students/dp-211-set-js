/*
Массивы не строго типизированы
Массивы не ограничены по длине
Копируются по значению
*/

const temps = new Array(30, 31, 33);
const nums = [1, 2, 3];
const anotherNums = nums;
nums.push(4);
anotherNums.push(5);

console.log(anotherNums, nums);

//Просто пройти по массиву и вывести (элемент массива, его индекс, сам массив)

const numsLen = nums.length;
for(let i = 0; i < numsLen; i += 1){
    console.log(nums[i], i, nums);
}
console.log('------------------------------');
nums.forEach(console.log);

console.clear();
//Обработка массива напильником. Что-то сделать с каждым элементом массива и получить новый, Обновленный массив.

const tempsK = [];
const tempsLen = temps.length;
for(let i = 0; i < tempsLen; i += 1){
    tempsK.push(temps[i] + 273.15);
}

const convertToK = t => t + 273.15;

const tempsK2 = temps.map(t => t + 273.15);
console.log(tempsK2);

//Отфильтровать транзакции, получить только суммы, больше 1000

const transactions = [123, 77, 99, 3456, 234, 988, 46576, 83484, 2];
const transactionsLen = transactions.length;
const transactionsOver1000 = [];
for(let i = 0; i < transactionsLen; i += 1){
    if(transactions[i] >= 1000){
        transactionsOver1000.push(transactions[i]);
    }
}

console.log(transactionsOver1000);

const transactionsOver1000v2 = transactions.filter(el => el >= 1000);
console.log(transactionsOver1000v2);

//Проверить каждый элемент на условие
const ship = ['Electronic', 'Toys', 'Medicine', 'Electronic', 'SUpplies', 'Technic', 'Food', 'Car', 'Car', 'Car', 'Medicine'];

const shipLen = ship.length;
let isCarantine = false;

for(let i = 0; i < shipLen; i += 1){
    if(ship[i] == 'Food'){
        isCarantine = true;
        break;
    }
}

console.log('Carantine: ', isCarantine);

const isCarantine2 = ship.some(el => el === 'Food');
console.log('Carantine2: ', isCarantine2);

//Проверить каждый элемент на условие
let isNoFood;

for(let i = 0; i < shipLen; i += 1){
    if(ship[i] !== 'Food'){
        isNoFood = true;
    }else{
        isNoFood = false;
        break;
    }
}

console.log('isNoFood:', isNoFood);

const isNoFood2 = ship.every(el => el !== 'Food');

console.log('isNoFood2: ', isNoFood2);

console.clear();
//Проанализировать массив и получить одно результирующее значение

let transactionsSum = 0;
for(let i = 0; i < transactionsLen; i += 1){
    transactionsSum += transactions[i];
}

console.log(transactionsSum);

const sum = transactions.reduce((acc, el) => acc + el, 0);
console.log(sum);

const stat = transactions.reduce((acc, el) => {
    acc.sum += el;
    const limitType = el >= 1000 ? 'over' : 'under';
    acc.limit[limitType].count += 1;
    acc.limit[limitType].sum += el;
    acc.limit[limitType].values.push(el);
    return acc;
}, {
    sum : 0,
    limit : {
        under : {
            count : 0,
            values : [],
            sum : 0
        },
        over : {
            count : 0,
            values : [],
            sum : 0
        }
    }
});

console.log(stat);