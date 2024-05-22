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
console.log('--описати колоду карт (від 6 до туза без джокерів)');

let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let colors = {
    spade: 'black',
    clubs: 'black',
    diamond: 'red',
    heart: 'red'
};

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: colors[suit]
        });
    }
}
console.log('Колода карт:',deck);

let aceOfSpade = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:',aceOfSpade);

let cardSix = deck.filter(card => card.value === '6');
console.log('Всі шістірки:',cardSix);

let redCards = deck.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redCards);

let diamondCard = deck.filter(card => card.cardSuit === 'diamond');
console.log('Всі буби:', diamondCard);

let clubsNineBig = deck.filter(card => card.cardSuit === 'clubs' && (['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));
console.log('Всі трефи від 9 та більше:', clubsNineBig);

// console.log('II спосіб');
// let BigValues = ['9', '10', 'jack', 'queen', 'king', 'ace'];
// let clubsNineBig1 = deck.filter(card => {
//     // Перевіряємо, чи карта трефова
//     if (card.cardSuit === 'clubs') {
//         // Перевіряємо, чи значення карти входить до списку BigValues
//         if (BigValues.includes(card.value)) {
//             return true;
//         }
//     }
//     return false;
// });
console.log('');

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
console.log(' Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об\'єкт');
//
// let suits = ['spade', 'diamond', 'heart', 'clubs'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// let colors = {
//     spade: 'black',
//     clubs: 'black',
//     diamond: 'red',
//     heart: 'red'
// };
//
// let deck = [];
//
// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({
//             cardSuit: suit,
//             value: value,
//             color: colors[suit]
//         });
//     }
// }

let groupedBySuits = deck.reduce((accumulator, currentCard) => {

    accumulator[currentCard.cardSuit].push(currentCard);
    return accumulator;
},
    {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});

console.log(groupedBySuits);
console.log('');


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
console.log('-взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray');

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log('--написати пошук всіх об\'єктів, в який в modules є sass');
let findSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log('modules з sass:', findSass);

console.log('--написати пошук всіх об\'єктів, в який в modules є docker');
let findDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log('modules з docker:', findDocker);

