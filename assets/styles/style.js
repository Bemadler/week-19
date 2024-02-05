
function createPostMarkup(post) {
    return `
    <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>
    `;
}

    function appendMarkupToContainer(markup, container) {
    container.innerHTML += markup;
}

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

    const postsContainer = document.querySelector('.container');

    posts.forEach(post => {
        const postMarkup = createPostMarkup(post);
        appendMarkupToContainer(postMarkup, postsContainer);
    });
    })
    .catch(error => console.error('Ошибка при загрузке данных:', error));
