
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст
// ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


const createTableButton = document.getElementById('createTableButton');

createTableButton.addEventListener('click', function() {
    const rows = parseInt(document.getElementById('rowsInput').value);
    const cols = parseInt(document.getElementById('colsInput').value);
    const content = document.getElementById('contentInput').value;

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Очистимо контейнер перед створенням нової таблиці

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.textContent = content;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
});
