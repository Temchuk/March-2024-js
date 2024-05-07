// Масиви та об'єкти:


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;

arr = [111, 555, 0.2, -8, 0, true, 'Olena', -0.05, false, 'Temchuk'];

console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

console.log(arr.length);
console.log('')


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Pride and Prejudice',
    pageCount: 368,
    genre: 'Classic Regency novel'
}
console.log(book1);


let book2 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 319,
    genre: 'Fantasy'
}
console.log(book2);


let book3 = {
    title: 'The Hunger Games',
    pageCount: 	448,
    genre: 'Dystopian'
}
console.log(book3);
console.log('')


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Book4',
    pageCount: 368,
    genre: 'Novel',
    authors: [
        {
            name: 'author1',
            age: 55
        },

        {
            name: 'author2',
            age: 46
        }
    ]
}
console.log(book4);


let book5 = {
    title: 'Book5',
    pageCount: 219,
    genre: 'Fantasy',
    authors: [
        {
            name: 'author1',
            age: 85
        },

        {
             name: 'author2',
             age: 23
        }
    ]
}
console.log(book5);


let book6 = {
    title: 'Book6',
    pageCount: 	450,
    genre: 'Dystopian',
    authors: [
        {
            name: 'author1',
            age: 45
        },

        {
            name: 'author2',
            age: 65
        }
    ]
}
console.log(book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let arrUsers;

arrUsers = [

    {   name: "Іван",
        username: "ivan123",
        password: "qwerty123" },

    {   name: "Олена",
        username: "olena456",
        password: "password456" },

    {   name: "Петро",
        username: "petro789",
        password: "123456" },

    {   name: "Марія",
        username: "maria_1",
        password: "secret123" },

    {   name: "Анна",
        username: "anna22",
        password: "anna123" },

    {   name: "Олег",
        username: "oleg99",
        password: "olegpass" },

    {    name: "Наталія",
        username: "natali_77",
        password: "nat123" },

    {   name: "Василь",
        username: "vasya_cool",
        password: "vasya1234" },

    {   name: "Юлія",
        username: "julia_456",
        password: "juliaspass" },

    {   name: "Михайло",
        username: "misha007",
        password: "misha_misha" }
];

// Перший спосіб виводу
console.log('')
console.log('1 спосіб виводу')
console.log(arrUsers[0].name,  arrUsers[0].password);
console.log(arrUsers[1].name,  arrUsers[1].password);
console.log(arrUsers[2].name,  arrUsers[2].password);
console.log(arrUsers[3].name,  arrUsers[3].password);
console.log(arrUsers[4].name,  arrUsers[4].password);
console.log(arrUsers[5].name,  arrUsers[5].password);
console.log(arrUsers[6].name,  arrUsers[6].password);
console.log(arrUsers[7].name,  arrUsers[7].password);
console.log(arrUsers[8].name,  arrUsers[8].password);
console.log(arrUsers[9].name,  arrUsers[9].password);

// Другий спосіб виводу
console.log('')
console.log('2 спосіб виводу')
console.log(`${arrUsers[0].name}: ${arrUsers[0].password}`);
console.log(`${arrUsers[1].name}: ${arrUsers[1].password}`);
console.log(`${arrUsers[2].name}: ${arrUsers[2].password}`);
console.log(`${arrUsers[3].name}: ${arrUsers[3].password}`);
console.log(`${arrUsers[4].name}: ${arrUsers[4].password}`);
console.log(`${arrUsers[5].name}: ${arrUsers[5].password}`);
console.log(`${arrUsers[6].name}: ${arrUsers[6].password}`);
console.log(`${arrUsers[7].name}: ${arrUsers[7].password}`);
console.log(`${arrUsers[8].name}: ${arrUsers[8].password}`);
console.log(`${arrUsers[9].name}: ${arrUsers[9].password}`);

// Третій спосіб виводу
console.log('')
console.log('3 спосіб виводу')
arrUsers.forEach(arrUsers => {
    console.log(`${arrUsers.name}: ${arrUsers.password}`);
});

// Четвертий спосіб виводу
console.log('')
console.log('4 спосіб виводу')
// Проходимося по кожному користувачу і виводимо їх паролі
for (let i = 0; i < arrUsers.length; i++) {
    console.log(`${arrUsers[i].name}: ${arrUsers[i].password}`);
}


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в
// 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в
// вас буде одновимірний масив з 21 значенням вичключаємо одразу
console.log('')
const arrWeather = [
    { day: "Понеділок", morning: 18, afternoon: 25, evening: 20 },
    { day: "Вівторок", morning: 17, afternoon: 24, evening: 19 },
    { day: "Середа", morning: 19, afternoon: 26, evening: 21 },
    { day: "Четвер", morning: 20, afternoon: 27, evening: 22 },
    { day: "П'ятниця", morning: 19, afternoon: 25, evening: 20 },
    { day: "Субота", morning: 18, afternoon: 23, evening: 18 },
    { day: "Неділя", morning: 17, afternoon: 22, evening: 17 }
];
console.log(arrWeather)
console.log(arrWeather[0]);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3

// 1 спосіб виводу (вручну кожну окремо)
console.log('')
console.log('1 спосіб виводу')

let d =-3;
console.log(d);
if (d !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// 2 спосіб виводу
console.log('')
console.log('2 спосіб виводу')
let x = +prompt('Enter x');
console.log(x);
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
// години попадає число (в першу, другу, третю или четверту частину години).
console.log('')
let time = +prompt('Enter time');
console.log(time);
if (time >= 0 && time <= 59){
    if(time >= 0 && time < 15){
        console.log('I чверть години');
    } if (time >= 15 && time < 30) {
        console.log('II чверть години');
    } if (time >= 30 && time < 45){
        console.log('III чверть години');
    }if (time >= 45 && time < 60){
        console.log('IV чверть години');
    }
} else{
    console.log('Не коректно введено число. Введіть число від 0 до 59.');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
console.log('')
let day = +prompt('Enter day');
console.log(day);
if (day >= 1 && day <= 31){
    if(day >= 1 && day < 10){
        console.log('I декада місяця');
    } if (day >= 10 && day < 20) {
        console.log('II декада місяця');
    } if (day >= 20 && day <= 31){
        console.log('III декада місяця');
   }
} else{
    console.log('Не коректно введено число. Введіть число від 1 до 31.');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на
// екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log('')
let dayNumber = +prompt('Введіть порядковий номер дня тижня (1-7):');
console.log(dayNumber);
switch(dayNumber) {
    case 1:
        dayNumber = 'Понеділок - перший день';
        break;
    case 2:
        dayNumber = 'Вівторок - другий день';
        break;
    case 3:
        dayNumber = 'Середа - третій день';
        break;
    case 4:
        dayNumber = 'Четвер - четвертий день';
        break;
    case 5:
        dayNumber = 'П\'ятниця - пятиний день';
        break;
    case 6:
        dayNumber = 'Субота - шостий день';
        break;
    case 7:
        dayNumber = 'Неділя - сьомий день';
        break;
    default:
        dayNumber = 'Введено некоректний номер дня. Введіть число від 1 до 7.';
}
console.log(dayNumber);


// -Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
console.log('')
let a = +prompt('Enter a');
let b = +prompt('Enter b');
console.log(a,b);
if (a === b){
    console.log('a=b')
} else {
    let ter = a > b? a : b;
    console.log(ter);
}


// - є змінна c, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//   Напишіть код який, буде присвоювати змінній c значення "default"  якщо ви намагаєтесь присвоїти в неї
//   falsy-значення хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// 1 спосіб
console.log('')
console.log('1 спосіб виводу')
let c=1;

if (c===false || c===0 || c==='' || c===null || c===undefined || c===NaN) {
    c='default';
    console.log(c);
} else {
    console.log('Значення є "true"');
}

// 2  спосіб
console.log('')
console.log('2 спосіб виводу')
let z=1;
if(!z){
    z='default';
    console.log(z);
}else {
    console.log(true);
}


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги
//   іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців
//   вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// 1  спосіб (кожен окремо перевіряти)
console.log('')
console.log('1 спосіб виводу')
let p=coursesAndDurationArray[0].monthDuration;
if (p > 5) {
    console.log(p);
    console.log('Супер');
} else {
    console.log(p);
    console.log('Погано');
}



// 2  спосіб
console.log('')
console.log('2 спосіб виводу')
for (let k = 0; k < coursesAndDurationArray.length; k++ ) {
    let w=coursesAndDurationArray[k].monthDuration;
    {
        if (w > 5) {
            console.log(w);
            console.log('Супер');
        } else {
            console.log(w);
            console.log('Погано');
        }
    }
}


