fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userListDiv = document.getElementById('userList');
        users.forEach(user => {

            const userDiv = document.createElement('div');
            userDiv.className = 'user-block';
            userDiv.innerHTML = `<p><strong>ID:</strong> ${user.id}</p>
                                 <p><strong>Name:</strong> ${user.name}</p>`;

            const button = document.createElement('button');
            button.textContent = 'Details';
            button.addEventListener('click', () => {
                 window.location.href = `user-details.html?id=${user.id}`;   // ? це передача параметрів запиту (user-details.html?id=1)
                // window.location.href = `https://jsonplaceholder.typicode.com/users/${user.id}`;   //простий перехід на тамту сторінку
            });
            userDiv.appendChild(button);

            userListDiv.appendChild(userDiv);
        });
    })
    .catch(error => console.error('Error:', error));