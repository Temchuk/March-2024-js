// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

// fetch('http://dummyjson.com/users')
//     .then(res => res.json())
//     .then(console.log);


document.addEventListener('DOMContentLoaded', () => {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const usersList = document.getElementById('users-list');
            data.forEach(user => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `user-details.html?id=${user.id}`;
                link.textContent = `${user.id} - ${user.name}`;
                listItem.appendChild(link);
                usersList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
});


