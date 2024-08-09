function solve() {
  const validNamingConventions = ['Camel Case','Pascal Case'];
  const textElement = document.querySelector('#text');
  const namingConventionElement = document.querySelector('#naming-convention');
  
  const resultElement = document.querySelector('.result-container #result');

 

  if (!validNamingConventions.includes(namingConventionElement.value)) {
    resultElement.textContent= 'Error!';
    return;
  }

  const pascalTextText=textElement.value.toLowerCase()
  .split(' ')
  .map((x) => x[0].toUpperCase()
  .concat(x.slice(1)))
  .join('');

  resultElement.textContent = namingConventionElement.value===validNamingConventions[0]
    ? pascalTextText[0].toLowerCase().concat(pascalTextText.slice(1)) : pascalTextText
}
