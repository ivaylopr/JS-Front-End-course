function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/phonebook';

    async function customFetch(url, options) {
        try {
            const data = await fetch(url, options).then((res) => res.json());
            return { data, error: null }
        } catch (error) {
            return { data: null, error };
        }
    }
    const phoneBookElement = document.getElementById('phonebook');
    const loadButtonElement = document.getElementById('btnLoad');
    const createButtonElement = document.getElementById('btnCreate');

    const [personInputElement, phoneInputElement] = document.querySelectorAll('input');

    async function fetchAllPosts() {
        const { data, error } = await customFetch(baseURL);

        if (error) {
            return
        }
        const posts = Object.values(data)

        appendAllContactsElements(posts);
    }

    async function deleteContact(contact) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        }
        const { data, error } = await customFetch(`${baseURL}/${contact._id}`, options);

        if (error) {
            return;
        }

        console.log(data);

        fetchAllPosts();
    }


    function appendAllContactsElements(posts) {
        phoneBookElement.innerHTML = "";

        posts.forEach((contact) => {
            const { person, phone } = contact;
            const liElement = document.createElement('li');

            liElement.textContent = `${person}: ${phone}`;

            const deleteElementButton = document.createElement('button');

            deleteElementButton.textContent = 'Delete';
            deleteElementButton.addEventListener('click', () =>
                deleteContact(contact));

            liElement.appendChild(deleteElementButton);
            phoneBookElement.appendChild(liElement);
        })
    }

    async function createContact() {
        const { value: phone } = phoneInputElement;
        const { value: person } = personInputElement;

        
        const {error} = await customFetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                phone,
                person
            })});
        if (error) {
            return
        }

        phoneInputElement.value='';
        personInputElement.value='';

        fetchAllPosts();
        
    }

    loadButtonElement.addEventListener('click', fetchAllPosts);
    createButtonElement.addEventListener('click', createContact);
}

attachEvents();
