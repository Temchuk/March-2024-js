// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(console.log);

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/carts')
        .then(response => response.json())
        .then(data => {
            const cartsContainer = document.getElementById('carts-container');
            data.carts.forEach(cart => {
                const cartDiv = document.createElement('div');
                cartDiv.innerHTML = `
                    <h2>Cart ID: ${cart.id}</h2>
                    <p>User ID: ${cart.userId}</p>
                    <p>Products: ${cart.products.map(p => p.title).join(', ')}</p>
                    <p>Total Quantity: ${cart.totalQuantity}</p>
                    <p>Total: ${cart.total}</p>
                    <p>Discounted Total: ${cart.discountedTotal}</p>
                `;
                cartsContainer.appendChild(cartDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});


