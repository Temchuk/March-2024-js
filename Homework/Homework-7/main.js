


// ***************  функції конструктор пишуться з великої букви   ************************************
// **************** constructor - зарезервоване слово, функція і межах класу - це метод ***********
//  ***********   треба new ****************




// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
console.log('Створити функцію конструктор для об\'єктів User з полями id, name, surname , email, phone');
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];

users.push(new User(1, "Іван", "Іванов", "ivan.ivanov@gmail.com", "123456789"));
users.push(new User(2, "Олена", "Петренко", "olena.petrenko@gmail.com", "123456789"));
users.push(new User(3, "Петро", "Сидоренко", "petro.sydorenko@gmail.com", "123456789"));
users.push(new User(4, "Наталія", "Ковальчук", "natalia.kovalchuk@gmail.com", "123456789"));
users.push(new User(5, "Олексій", "Шевченко", "oleksiy.shevchenko@gmail.com", "123456789"));
users.push(new User(6, "Марія", "Мельник", "maria.melnyk@gmail.com", "123456789"));
users.push(new User(7, "Дмитро", "Поліщук", "dmytro.polishchuk@gmail.com", "123456789"));
users.push(new User(8, "Катерина", "Ткаченко", "kateryna.tkachenko@gmail.com", "123456789"));
users.push(new User(9, "Андрій", "Лисенко", "andriy.lysenko@gmail.com", "123456789"));
users.push(new User(10, "Ганна", "Романенко", "hanna.romanenko@gmail.com", "123456789"));

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об\'єкти з парними id (filter)');
let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)');
users.sort((a, b) => a.id - b.id);
console.log(users);
console.log('');
console.log('');






// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];


clients.push(new Client(1, "Іван", "Іванов", "ivan.ivanov@gmail.com", "123456789", ["товар1", "товар2"]));
clients.push(new Client(2, "Олена", "Петренко", "olena.petrenko@gmail.com", "123456789", ["товар1"]));
clients.push(new Client(3, "Петро", "Сидоренко", "petro.sydorenko@gmail.com", "123456789", ["товар1", "товар2", "товар3"]));
clients.push(new Client(4, "Наталія", "Ковальчук", "natalia.kovalchuk@gmail.com", "123456789", ["товар1"]));
clients.push(new Client(5, "Олексій", "Шевченко", "oleksiy.shevchenko@gmail.com", "123456789", ["товар1", "товар2", "товар3", "товар4"]));
clients.push(new Client(6, "Марія", "Мельник", "maria.melnyk@gmail.com", "123456789", ["товар1", "товар2"]));
clients.push(new Client(7, "Дмитро", "Поліщук", "dmytro.polishchuk@gmail.com", "123456789", ["товар1", "товар2", "товар3", "товар4", "товар5"]));
clients.push(new Client(8, "Катерина", "Ткаченко", "kateryna.tkachenko@gmail.com", "123456789", ["товар1"]));
clients.push(new Client(9, "Андрій", "Лисенко", "andriy.lysenko@gmail.com", "123456789", ["товар1", "товар2", "товар3"]));
clients.push(new Client(10, "Ганна", "Романенко", "hanna.romanenko@gmail.com", "123456789", ["товар1", "товар2", "товар3", "товар4"]));

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)');
clients.sort((x, y) => x.order.length - y.order.length);
console.log(clients);
console.log('');
console.log('');






// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('- Створити функцію конструктор яка дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:');
function Car(model, maker, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;


    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };


    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.maker}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engineCapacity} л`);
    };


    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };


    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function(newValue) {
        this.year = newValue;
    };


    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function(driver) {
        this.driver = driver;
    };
}


let myCar = new Car('Model х', 'Tesla', 2021, 200, 1.0);


myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2024);
myCar.addDriver({ name: 'Олена', age: 22 });
myCar.info();
console.log(myCar);

console.log('');
console.log('');






// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car1 {
    constructor(model, maker, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }


    drive1() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }


    info1() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.maker}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engineCapacity} л`);
    }


    increaseMaxSpeed1(newSpeed) {
        this.maxSpeed += newSpeed;
    }


    changeYear1(newValue) {
        this.year = newValue;
    }


    addDriver1(driver) {
        this.driver = driver;
    }
}


let myCar1 = new Car1('Model x', 'Tesla', 2021, 200, 1.0);


myCar1.drive1();
myCar1.info1();
myCar1.increaseMaxSpeed1(20);
myCar1.changeYear1(2024);
myCar1.addDriver1({ name: 'Олена', age: 22 });
myCar1.info1();
console.log(myCar1);

console.log('');
console.log('');






// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}


let cinderellas = [
    new Cinderella("Анна", 20, 35),
    new Cinderella("Марія", 22, 36),
    new Cinderella("Олена", 25, 37),
    new Cinderella("Ірина", 18, 38),
    new Cinderella("Катерина", 23, 36),
    new Cinderella("Наталія", 27, 39),
    new Cinderella("Софія", 21, 35),
    new Cinderella("Дарина", 19, 37),
    new Cinderella("Юлія", 24, 38),
    new Cinderella("Вікторія", 26, 40)
];


class Prince {
    constructor(name, age, foundShoes) {
        this.name = name;
        this.age = age;
        this.foundShoes = foundShoes;
    }
}


let prince = new Prince("Олександр", 20, 39);


let foundCinderella;
for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.foundShoes) {
        foundCinderella = cinderellas[i];
        break;
    }
}


if (foundCinderella) {
    console.log(`Принц ${prince.name} знайшов попелюшку ${foundCinderella.name}.`);
} else {
    console.log("Попелюшка не знайдена.");
}

//      За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let foundCinderellaFind = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoes);

if (foundCinderellaFind) {
    console.log(`Принц ${prince.name} знайшов попелюшку ${foundCinderellaFind.name}.`);
} else {
    console.log("Попелюшка не знайдена.");
}

console.log('');
console.log('');






// Через Array.prototype. створити власний foreach, filter, map
console.log('-Через Array.prototype. створити власний foreach, filter, map');

Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};


Array.prototype.customFilter = function(callback) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};


Array.prototype.customMap = function(callback) {
    let mappedArray = [];
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(callback(this[i], i, this));
    }
    return mappedArray;
};


let classmates = [
    { name: 'Владислав', age: 20, grade: 'A' },
    { name: 'Олена', age: 21, grade: 'B' },
    { name: 'Олексій', age: 19, grade: 'A' },
    { name: 'Вталій', age: 22, grade: 'C' },
    { name: 'Анастасія', age: 20, grade: 'B' }
];


classmates.customForEach(classmate => {
    console.log(`${classmate.name} (${classmate.age} років), оцінка: ${classmate.grade}`);
});


let goodStudents = classmates.customFilter(classmate => classmate.grade === 'A');
console.log("Відмінники:", goodStudents);


let names = classmates.customMap(classmate => classmate.name);
console.log("Імена одногрупників:", names);
