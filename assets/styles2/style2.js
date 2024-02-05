// JavaScript
const inputHeader = document.querySelector('.inputHeader');
const inputPosts = document.querySelector('.inputPosts');
const addButton = document.querySelector('.addButton');
const postsContainer = document.querySelector('.postsContainer');

function addPost() {
    const postTitle = inputHeader.value;
    const postBody = inputPosts.value;

    if (postTitle === '' || postBody === '') {
        alert("Заполните оба поля!");
    } else {
        // Создаем элементы для отображения поста
        const newPost = document.createElement('div');
        const postTitleElement = document.createElement('h2');
        const postBodyElement = document.createElement('p');

        // Присваиваем значения из инпутов
        postTitleElement.innerText = postTitle;
        postBodyElement.innerText = postBody;

        // Добавляем созданные элементы в новый пост
        newPost.appendChild(postTitleElement);
        newPost.appendChild(postBodyElement);

        // Добавляем новый пост в контейнер
        postsContainer.appendChild(newPost);
        
        // Очищаем инпуты после добавления поста
        inputHeader.value = '';
        inputPosts.value = '';

        // Выполняем POST-запрос на сервер
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }
}

addButton.addEventListener('click', addPost);
