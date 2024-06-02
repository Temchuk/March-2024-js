fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userListDiv = document.getElementById('userList');
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user-block';
            userDiv.innerHTML = `<p>ID: ${user.id}</p><p>Name: ${user.name}</p>`;

            const button = document.createElement('button');
            button.textContent = 'Details';
            button.addEventListener('click', () => {
                 window.location.href = `user-details.html?id=${user.id}`;   // ? це передача параметрів запиту (user-details.html?id=1)
            });
            userDiv.appendChild(button);

            userListDiv.appendChild(userDiv);
        });
    })
    .catch(error => console.error('Error:', error));