const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDetailsDiv = document.getElementById('postDetails');
        postDetailsDiv.innerHTML = `
                    <p><b>ID:</b> ${post.id}</p>
                    <p><b>Title:</b> ${post.title}</p>
                    <p><b>Body:</b> ${post.body}</p>
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
                        <p><strong>${comment.name}</strong></p>
                        <p>${comment.email}</p>
                        <p>${comment.body}</p>
                    `;
            commentsListDiv.appendChild(commentItemDiv);
        });
    })
    .catch(error => console.error('Error:', error));