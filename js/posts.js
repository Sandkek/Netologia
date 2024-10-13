import { posts } from './postMock.js';

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        var spinner = document.getElementById("spinner");
        spinner.remove();

        const isAuthenticated = sessionStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            document.getElementById('authButton').style.display = 'block';
            document.getElementById('authButton').addEventListener('click', function() {
                window.location.href = 'login.html';
            });
        } else {
            const postsContainer = document.querySelector('.posts-container');

            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'col-md-4 mb-4';

                postElement.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.content.substring(0, 40)}...</p>
                            <a href="post.html?id=${post.id}" class="btn btn-primary">Подробнее</a>
                        </div>
                    </div>
                `;

                postsContainer.appendChild(postElement);
            });
        }

    }, 2000);

});