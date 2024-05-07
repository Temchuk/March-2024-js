// 'use strict';

// --------------Завдання 1------------
// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let x1 = 'hello';
let x2 = 'owu';
let x3 = 'com';
let x4 = 'ua';
let x5 = 1;
let x6 = 10;
let x7 = -999;
let x8 = 123;
const PI = 3.14;
let x10 = 2.7;
let x11 = 16;
let x12 = true;
let x13 = false;



console.log(x1, x2, x3, x4);
console.log(x5);
console.log(x6);
console.log(x7);
console.log(x8);
console.log(PI);
console.log(x10);
console.log(x11);
console.log(x12);
console.log(x13);


// --------------Завдання 2------------
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну
// змінну person (Не об'єкт, просто за допомоги конкатенації)


let firstName = 'Olena';
let middleName = 'Olehivna';
let lastName = 'Temchuk';

let space = ' ';
let person = firstName + space + middleName + space + lastName;
console.log(person);

result = `${firstName} ${middleName} ${lastName}`;
console.log(result);

// --------------Завдання 3------------
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// --------------Завдання 4------------
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками
// та вивести в консоль

let fName = prompt('Ведіть імя');
let mName = prompt('Введіть по-батькові');
let age = prompt('Ведіть вік');

result2 = `${fName} ${mName} ${age}`;
console.log(result2);