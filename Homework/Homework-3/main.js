// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

document.write(`<h3>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</h3>`)
let arrUsers = [
    {name: 'Іван', username: 'ivan123', password: 'qwerty123'},
    {name: 'Олена', username: 'olena456', password: 'password456'},
    {name: 'Петро', username: 'petro789', password: '123456'},
    {name: 'Марія', username: 'maria_1', password: 'secret123'},
    {name: 'Анна', username: 'anna22', password: 'anna123'},
    {name: 'Олег', username: 'oleg99', password: 'olegpass'},
    {name: 'Наталія', username: 'natali_77', password: 'nat123'},
    {name: 'Василь', username: 'vasya_cool', password: 'vasya1234'},
    {name: 'Юлія', username: 'julia_456', password: 'juliaspass'},
    {name: 'Михайло', username: 'misha007', password: 'misha_misha'}
]

for (let User of arrUsers) {
    document.write(`<div>
                        <h4> ${User.name} = ${User.username} </h4>
                    </div>`)
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

document.write(`<h3>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині</h3>`)

for (let i = 1; i <= 10; i++) {
    document.write(`<div>Це блок ${i}</div>`);
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

document.write(`<h3>За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.</h3>`)
const arrWeathers = [
    {day: '1', morning: 18, afternoon: 25, evening: 20},
    {day: '2', morning: 17, afternoon: 24, evening: 19},
    {day: '3', morning: 19, afternoon: 26, evening: 21},
    {day: '4', morning: 20, afternoon: 27, evening: 22},
    {day: '5', morning: 19, afternoon: 25, evening: 20},
    {day: '6', morning: 18, afternoon: 23, evening: 18},
    {day: '7', morning: 18, afternoon: 23, evening: 18},
    {day: '8', morning: 18, afternoon: 23, evening: 18},
    {day: '9', morning: 18, afternoon: 23, evening: 18},
    {day: '10', morning: 18, afternoon: 23, evening: 18},
    {day: '11', morning: 18, afternoon: 23, evening: 18},
    {day: '12', morning: 18, afternoon: 23, evening: 18},
    {day: '13', morning: 18, afternoon: 23, evening: 18},
    {day: '14', morning: 18, afternoon: 23, evening: 18},
    {day: '15', morning: 18, afternoon: 23, evening: 18},
    {day: '16', morning: 18, afternoon: 23, evening: 18},
    {day: '17', morning: 18, afternoon: 23, evening: 18},
    {day: '18', morning: 18, afternoon: 23, evening: 18},
    {day: '19', morning: 18, afternoon: 23, evening: 18},
    {day: '20', morning: 18, afternoon: 23, evening: 18}
];
let i = 0;
while (i < arrWeathers.length) {
    let arrWeather = arrWeathers[i];
    document.write(`<h1>Day: ${arrWeather.day}</h1>`)
    i++;
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<h3>За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.</h3>`)
let j = 0;
while (j <= 20) {
    document.write(`<h1>Блок ${j}</h1>`);
    j++;
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//

document.write('<h3>Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону</h3>');

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for ( let listOfItem of listOfItems){
    document.write(`<li>${listOfItem}</li>`);
}
document.write('</ul>');


// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
//      let products = [
//      {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

document.write('<h3>Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону. Великими літерами прописанні властивості об\'єкту які потрібно впровадити в шаблон</h3>');

     let products = [
     {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
     ]
for (let product of products){
    document.write(`<div>
        <h3>${product.title}. Price - ${product.price}$</h3>
        <img src="${product.image}" alt="">
    </div>`);
}


//    - є масив:
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

console.log('є масив, за допомоги циклу вивести:\n' +
    '- користувачів зі статусом true\n' +
    '- користувачів зі статусом false\n' +
    '- користувачів які старші за 30 років');

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
        ];

        console.log('');
        console.log('Користувачі зі статусом true');
        for (let y = 0; y < users.length; y++) {
        let user = users[y];

        if (user.status === true) {
        console.log(user.name, user.status);
    }
    }

        console.log('');
        console.log('Користувачі зі статусом false');
        for (let k = 0; k < users.length; k++) {
        let user = users[k];

        if (user.status === false) {
        console.log(user.name, user.status);
    }

    }

        console.log('');
        console.log('Користувачі які старші за 30 років');
        for (let z = 0; z < users.length; z++) {
        let user = users[z];
        if (user.age > 30) {
        console.log(user.name, user.age);
    }
    }
// Користувачі старші за 30 років
document.write('<h3>є масив, за допомогою циклу вивести: користувачів які старші за 30 років</h3>');
        document.write('<h4>Користувачі старші за 30 років:</h4>');
        for (let user of users) {
        if (user.age > 30) {
        document.write(`<h4>${user.name}: ${user.age}</h4>`);
    }
    }
