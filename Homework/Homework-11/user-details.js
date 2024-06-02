document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userDetails = document.getElementById('user-details');
            userDetails.innerHTML = `
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
                <p>Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
});
