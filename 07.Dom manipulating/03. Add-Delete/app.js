function addItem() {
    // get element references
    const itemElement = document.getElementById('items');
    const newItemTextElement = document.getElementById('newItemText');

    //create new element with textContent of the input
    const liElement = document.createElement('li');
    liElement.textContent=newItemTextElement.value;

    //create button delite
    const deleteButton = document.createElement('a');
    deleteButton.textContent='[Delete]'
    //deleteButton.setAttribute('href','#')
    deleteButton.href='#';

    //attach event to the button
    deleteButton.addEventListener('click', (e)=>{
        e.currentTarget.parentElement.remove();
    })

    //add to liElement
    liElement.append(deleteButton);

    //Attach to DOM
    itemElement.appendChild(liElement);

    //clean input
    newItemTextElement.value='';
}
