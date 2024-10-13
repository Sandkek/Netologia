import { posts } from './postMock.js';
import { users } from './userMock.js';

document.addEventListener('DOMContentLoaded', function() {
    function getPostById(id) {
        return posts.find(post => post.id === parseInt(id));
    }

    function getUserById(id) {
        return users.find(user => user.id === parseInt(id));
    }

    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');

    if (postId) {
        setTimeout(() => {
            const post = getPostById(postId);
            if (post) {
                const author = getUserById(post.authorId);

                var spinner = document.getElementById("spinner");
                spinner.remove();

                const isAuthenticated = sessionStorage.getItem('isAuthenticated');
                if (!isAuthenticated) {
                    document.getElementById('authButton').style.display = 'block';
                    document.getElementById('authButton').addEventListener('click', function() {
                        window.location.href = 'login.html';
                    });
                } else {

                    document.querySelector('#postDetails').style.display = 'block';
                    document.querySelector('#postTitle').textContent = post.title;
                    document.querySelector('#postContent').textContent = post.content;
                    document.querySelector('#postSubtitle').textContent = `Автор: ${author.name}; Дата: ${post.date}`;
                }
            } else {
                window.location.href = '404.html';
            }
        }, 2000);
    } else {
        window.location.href = '404.html';
    }
});
