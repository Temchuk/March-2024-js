// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!



// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('-створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б');
let area = (a,b) => a*b;
console.log(area(5,6));
console.log('');


// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('-створити функцію, яка обчислює та повертає площу круга з радіусом r');
let areaCircle = (r) => Math.PI*r**2;
console.log(areaCircle(8));
console.log('');


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Площа бічної поверхні циліндра: S=2Пr*h
console.log('- створити функцію, яка обчислює та повертає площу циліндру висотою h та радіутом r');
let areaCylinder= (r,h) => 2*Math.PI*r*h;
console.log(areaCylinder(5, 6));
console.log('');











// дороблювала****************


// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('- створити функцію, яка приймає масив та виводить кожен його елемент')

const arrWeather = [
    { day: "Понеділок", morning: 18, afternoon: 25, evening: 20 },
    { day: "Вівторок", morning: 17, afternoon: 24, evening: 19 },
    { day: "Середа", morning: 19, afternoon: 26, evening: 21 },
    { day: "Четвер", morning: 20, afternoon: 27, evening: 22 },
    { day: "П'ятниця", morning: 19, afternoon: 25, evening: 20 },
    { day: "Субота", morning: 18, afternoon: 23, evening: 18 },
    { day: "Неділя", morning: 17, afternoon: 22, evening: 17 }
];

const printArrayElements = arr => {
    arr.forEach(element => console.log(element));
};

printArrayElements(arrWeather);
console.log('');




// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('<h3>- створити функцію яка створює параграф з текстом. Текст задати через аргумент</h3>');
const createParagraph = text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
};

createParagraph('Це текст.');




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('<h3>- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий</h3>');
const createList = text => {
    const ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

createList('Текст для усіх елементів');





// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент
// всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('<h3>- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент  всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)</h3>');
const createList2 = (text, count) => {
    const ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

createList2('Текст', 3);





// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250



