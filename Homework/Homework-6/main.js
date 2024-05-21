// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('- Знайти та вивести довижину настипних стрінгових значень \'hello world\', \'lorem ipsum\', \'javascript is cool\'');
function printWordLengths(words) {
    words.forEach(item=> {
        console.log(`Довжина '${item}' = ${item.length}`);
    });
}
let words = ['hello world', 'lorem ipsum', 'javascript is cool'];
printWordLengths(words);
console.log('');


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('- Перевести до великого регістру наступні стрінгові значення \'hello world\', \'lorem ipsum\', \'javascript is cool\'');
let arrStrings = ['hello world', 'lorem ipsum', 'javascript is cool'];
let upperStrings = arrStrings.map(str => str.toUpperCase());
console.log(upperStrings);
console.log('');


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('- Перевести до нижнього регістру настипні стрінгові значення \'HELLO WORLD\', \'LOREM IPSUM\', \'JAVASCRIPT IS COOL\'');
let strings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
let lowerStrings = strings.map(str => str.toLowerCase());
console.log(lowerStrings);
console.log('');


// - Є "брудна" стрінга let str = ' dirty string   '. Почистити її від зайвих пробілів.
console.log('- Є "брудна" стрінга let str = \' dirty string   \'. Почистити її від зайвих пробілів.');
console.log('I спосіб');
console.log(' dirty string   '.trim());

console.log('-Якщо є зайві пробіли всередині рядка, їх також можна видалити');
console.log('II спосіб');
let str = ' dirty     string   ';
let cleanStr = str.trim().replace(/\s+/g, ' ');
console.log(cleanStr);
console.log('');


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log('- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів. let str = \'Ревуть воли як ясла повні\';');
function stringToArray(str1) {
    return str1.split(' ');
}
let str1 = 'Ревуть воли як ясла повні';
let arr = stringToArray(str1);
console.log(arr);
console.log('');


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об\'єкти в масиві на стрінгові.');
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);
console.log('');


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.');
function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
    // Якщо direction не вказано або вказано неправильно, повертаємо масив без змін
    return nums;
}
let nums = [11, 3, 21];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'invalid'));
console.log('');


// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log('--відсортувати масив за спаданням за monthDuration');
let sortMonthDuration = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration )
console.log(sortMonthDuration);

console.log('--відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців');
let filterMonthDuration = coursesAndDurationArray.filter(month => month.monthDuration > 5)
console.log(filterMonthDuration);

console.log('--за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}');

console.log('');


//   описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker