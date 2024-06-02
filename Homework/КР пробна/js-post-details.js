const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDetailsDiv = document.getElementById('postDetails');
        postDetailsDiv.innerHTML = `
                    <p>ID: ${post.id}</p>
                    <p>Title: ${post.title}</p>
                    <p>Body: ${post.body}</p>
                `;

        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    })
    .then(response => response.json())
    .then(comments => {
        const commentsListDiv = document.getElementById('commentsList');
        comments.forEach(comment => {
            const commentItemDiv = document.createElement('div');
            commentItemDiv.className = 'comment-item';
            commentItemDiv.innerHTML = `
                        <p><strong>${comment.name}</strong> (${comment.email})</p>
                        <p>${comment.body}</p>
                    `;
            commentsListDiv.appendChild(commentItemDiv);
        });
    })
    .catch(error => console.error('Error:', error));