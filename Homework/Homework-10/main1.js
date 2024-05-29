// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку
// зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму,
// натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================


function submitForm() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    const person = {
        name: name,
        surname: surname,
        age: age
    };

    const output = document.getElementById('output');

    output.innerHTML = '';

    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(person, null, 2);
    output.appendChild(pre);
}








// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1


let count = localStorage.getItem('counter');

if (count === null) {
    count = 0;
} else {
    count = parseInt(count);
}

count++;

localStorage.setItem('counter', count);

const counterElement = document.getElementById('counter');

counterElement.textContent = count;













// НЕ ЗРОБИЛА************

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в
// середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після
//     попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається