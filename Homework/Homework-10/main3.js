// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб
// при натисканні на кнопку зникав елемент з id="text".


document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const hideButton = document.getElementById('hideButton');

    hideButton.addEventListener('click', function() {
        textElement.style.display = 'none';
    });
});
