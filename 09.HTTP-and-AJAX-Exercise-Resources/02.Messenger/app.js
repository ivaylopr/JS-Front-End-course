function attachEvents() {
    // http://localhost:3030/jsonstore/messenger
    const baseURL = 'http://localhost:3030/jsonstore/messenger';

    async function customFetch(url, options) {
        return fetch(url, options).then((res) => res.json());
    }

    const submitElement = document.getElementById('submit');
    const refreshElement = document.getElementById('refresh');
    const messageElement = document.getElementById('messages');

    const [authorInputElement, contentInputElement] =
        document.querySelectorAll("div#controls input[type='text']");

    function createMessageHandler() {
        customFetch(baseURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                author: authorInputElement.value,
                content: contentInputElement.value,
            },)
        }).then(()=>{
            authorInputElement.value="";
            contentInputElement.value="";
        })
    }

    function getAllMessages() {
        customFetch(baseURL).then(appendMessages);
    }

    function appendMessages(messagesResponse) {
        messageElement.textContent= Object.values(messagesResponse).map(({author, content})=>`${author}: ${content}`)
        .join('\n');
    }


    submitElement.addEventListener('click', createMessageHandler);
    refreshElement.addEventListener('click', getAllMessages);
}

attachEvents();
