// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('-створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б');
console.log('I спосіб');
function area(a,b) {
    let s = a*b;
    console.log(s);
}
area(6,5);

console.log('II спосіб');
function ploshcha( ) {
    let x = +prompt('Введіть значення сторони х:');
    let y = +prompt('Введіть значення сторони у:');
    let s = x*y;
    console.log( 'Площа:', s);
}
ploshcha();
console.log('');


// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('-створити функцію, яка обчислює та повертає площу круга з радіусом r');
console.log('I спосіб');
function areaCircle1(r) {
    let result = 3.14*r*r;
    console.log(result);
    return result;
}
areaCircle1(6);

console.log('II спосіб');
function areaCircle2(r) {
    let s = Math.PI*r**2;
    console.log(s);
    return s;
}
areaCircle2(6);
console.log('');


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Площа бічної поверхні циліндра: S=2Пr*h
// Площа основи  циліндра: S=Пr^2
// Площа цилідра (2 основи + бічна поверхня): S=2*Пr^2+2Пr*h
console.log('- створити функцію, яка обчислює та повертає площу циліндру висотою h та радіутом r');
function areaCylinder(h,r) {
    let c = 2*Math.PI*r**2+2*Math.PI*r*h;
    console.log(c);
}
areaCylinder(7,5);
console.log('');


// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('- створити функцію, яка приймає масив та виводить кожен його елемент')
function printerArray(array) {
    for (const item of array) {
        console.log(item);
    }
}

const arrWeather = [
    { day: "Понеділок", morning: 18, afternoon: 25, evening: 20 },
    { day: "Вівторок", morning: 17, afternoon: 24, evening: 19 },
    { day: "Середа", morning: 19, afternoon: 26, evening: 21 },
    { day: "Четвер", morning: 20, afternoon: 27, evening: 22 },
    { day: "П'ятниця", morning: 19, afternoon: 25, evening: 20 },
    { day: "Субота", morning: 18, afternoon: 23, evening: 18 },
    { day: "Неділя", morning: 17, afternoon: 22, evening: 17 }
];
printerArray(arrWeather);
console.log('');


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('<h3>Створити функцію, яка створює параграф з текстом. Текст задати через аргумент</h3>');
function printText1(text){
        document.write(`<p>${text}</p>`);
}
printText1('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis delectus ea eveniet facilis ipsum iusto magnam maiores modi numquam reprehenderit saepe sequi ut, velit, veritatis. Aperiam natus odio officiis.');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('<h3>Створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий</h3>');
function printText2(text){

    document.write('<ul>');
    for (let i=1; i<4; i++) {
        document.write(`<li>${text} ${i}</li>`);
    }
    document.write('</ul>');
}
printText2('Text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('<h3>Створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)</h3>');
function printText3(text,j){
        document.write('<ul>');
    for ( let i=1; i<=j; i++) {
        document.write(`<li>${text} ${i}</li>`);
    }
    document.write('</ul>');
}
printText3('Новий текст', 3);






// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві)
// та будує для них список
document.write('<h3>Створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список</h3>');
let elements = [5, 8, 'Ok', 'No', true, false];
function arrPrintElements(arr){
    for ( let i=0; i<arr.length; i++) {
        document.write(`<ul>${arr[i]}</ul>`);
    }
}
arrPrintElements(elements);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в
// документ. Для кожного об'єкту окремий блок.
document.write('<h3>Створити функцію, яка приймає масив об\'єктів з наступними полями id, name, age та виводить їх в документ. Для кожного об\'єкту окремий блок.</h3>')
function arrUsersFn(arr) {
    for (let user of arr) {
        document.write(`<div>
                            <h4>ID: ${user.id}</h4>
                            <p>Name: ${user.name}</p>
                            <p>Age: ${user.age}</p>
                        </div>`)
    }
}

let arrUsers = [
    { id: 1, name: 'Іван', age: 30 },
    { id: 2, name: 'Олена', age: 22 },
    { id: 3, name: 'Марта', age: 35 }
];
arrUsersFn(arrUsers);


// - створити функцію яка повертає найменьше число з масиву
console.log('Створити функцію, яка повертає найменше число з масиву');
function findMinNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let arrNumbers = [10, 5, 8, 3, 12];
let MinNumber = findMinNumber(arrNumbers);
console.log('Найменше число:', MinNumber);
console.log('');


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
console.log('Створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.');
let arrSumNumbers = [10, 5, 8, 3, 12];
function sum(arr){
    let sumNum = 0;
    for(let i = 0; i < arr.length; i++){
        // sumNum = sumNum+arr[i];
        sumNum += arr[i];
    }
    console.log(sumNum);
    return sumNum;
}
sum(arrSumNumbers);
console.log('');


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log('Створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах');
let numbers = [10, 5, 8, 3, 12];
console.log(numbers);
function swapFn(arr) {
    let newArray = [];
    for (let i=arr.length-1; i>=0; i--){
        newArray.push(arr[i]);
    }
    console.log(newArray);
    }
swapFn(numbers)
console.log('');


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
console.log('Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)');
function exchangeFn(USD,EUR) {
    let currency = prompt('Введіть валюту: USD чи EUR');
    let value = +prompt('Введіть суму:');
if(currency === 'USD'){
   let sumUAH= value * USD;
    console.log(sumUAH,'грн');
}
    if (currency === 'EUR'){
      let  sumUAH= value * EUR;
        console.log(sumUAH,'грн');
    }
}
exchangeFn(39.5, 42.6);





