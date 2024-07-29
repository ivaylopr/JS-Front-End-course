//first targeting method by id
const movieListElement = document.getElementById('movie-list');
console.log(movieListElement);


//second targeting method by class name => collection
//who can be iterated with for of
// it can be acceassed by index=> headingElements[0]
// it's html collection
const headingElements = document.getElementsByClassName('heading');
console.log(headingElements);


//Targeting method by tag name => html collection
const movieListTagElements = document.getElementsByTagName('li');
console.log(movieListTagElements);


// By css selector
const favoritMovieElement = document.querySelector('#movie-list li:first-of-type'); //return single element

console.log(favoritMovieElement.textContent);


//it returns static node list it has foreach,for of, it can be acceass by index
const allMovieElements = document.querySelectorAll('#movie-list li'); 
console.log(allMovieElements); 
//we can make the node list live when we define the node list result we 
//put .childNodes in the end!

//example:
const liveNodeList = allMovieElements.childNodes;
console.log(liveNodeList);
