function attachEvents() {
    // TODO:
    const baseURL = 'http://localhost:3030/jsonstore/blog';
    const postsURL = `${baseURL}/posts`;
    const commentsURL = `${baseURL}/comments`;
    // Posts - http://localhost:3030/jsonstore/blog/posts
    // Comments - http://localhost:3030/jsonstore/blog/comments


    const loadPostsElement = document.getElementById('btnLoadPosts');
    const selectElement = document.getElementById('posts');
    const viewPostCommentElement = document.getElementById('btnViewPost');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');
    const postTitleElement = document.getElementById('post-title')

    async function customFetch(url) {
        return fetch(url).then((res) => res.json());
    }

    function appendPosts(postsResponse) {
        selectElement.textContent = '';
        Object.values(postsResponse).forEach(({ body, id, title }) => {
            const optionElement = document.createElement("option");

            optionElement.textContent = title;
            optionElement.value = id;
            optionElement.setAttribute('data-body',body);

            selectElement.appendChild(optionElement);
        });


    }

    function fetchAllPosts() {
        customFetch(postsURL)
            .then(appendPosts);
    }

    function fetchSinglePost() {

        const { value: selectedPostId } = selectElement;

        if (!selectedPostId) {
            return;
        }

        customFetch(`${postsURL}/${selectedPostId}`)
            .then(({ body, title }) => {
                postBodyElement.textContent = body;
                postTitleElement.textContent = title;

                customFetch(commentsURL).then((commentsResponse) => {
                    postCommentsElement.textContent = '';

                    Object.values(commentsResponse)
                        .filter(({ postId }) => postId === selectedPostId)
                        .forEach(({ id, text }) => {
                            const li = document.createElement('li');

                            li.textContent = text;
                            li.setAttribute = ('data-id', id);

                            postCommentsElement.appendChild(li);
                        })
                })
            })
    }

    loadPostsElement.addEventListener('click', fetchAllPosts);
    viewPostCommentElement.addEventListener('click', fetchSinglePost);
}

attachEvents();
