const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDetailsDiv = document.getElementById('userDetails');
        userDetailsDiv.innerHTML = `
                    <p><b>ID:</b> ${user.id}</p>
                    <p><b>Name:</b> ${user.name}</p>
                    <p><b>Username:</b> ${user.username}</p>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Phone:</b> ${user.phone}</p>
                    <p><b>Website:</b> ${user.website}</p>
                    <p><b>Address:</b> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, (${user.address.geo.lat}, ${user.address.geo.lng})</p>
                    <p><b>Company:</b> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                `;
    })
    .catch(error => console.error('Error:', error));

document.getElementById('loadPostsButton').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postsListDiv = document.getElementById('postsList');
            postsListDiv.innerHTML = '';
            posts.forEach(post => {
                const postItemDiv = document.createElement('div');
                postItemDiv.className = 'post-item';
                postItemDiv.innerHTML = `<p>${post.title}</p>`;

                const button = document.createElement('button');
                button.textContent = 'Details';
                button.addEventListener('click', () => {
                    window.location.href = `post-details.html?id=${post.id}`;
                });
                postItemDiv.appendChild(button);

                postsListDiv.appendChild(postItemDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});