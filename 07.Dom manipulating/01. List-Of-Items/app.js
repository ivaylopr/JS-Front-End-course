function addItem() {
    //get element references
    
    const itemsElement= document.getElementById('items')
    const inputElement = document.getElementById('newItemText');

    // read text input
    const itemText = inputElement.value;

    //create the element
    const liElement = document.createElement('li');

    //add text content to the element
    liElement.textContent=itemText;

    //append the element to the Dom three
    itemsElement.appendChild(liElement);

    //clear the input value
    inputElement.value="";
}
