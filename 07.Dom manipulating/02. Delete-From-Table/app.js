function deleteByEmail() {
    // get input and table element references
    const customerTableElement = document.getElementById('customers');
    const inputElement = document.querySelector('input[type=text][name=email]');
    const resultElement = document.getElementById('result');


    //get input text value
    const searchedEmail = inputElement.value;

    //Get all rows
    const tdElements = customerTableElement.querySelectorAll('tbody td:last-child');

    //search for email
    const searchedElement = Array.from(tdElements).find(el => el.textContent === searchedEmail);
    if (searchedElement) {
        searchedElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

}
